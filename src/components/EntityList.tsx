import * as React from "react";
import El from "ui-box-plus";
import { Empty, PageHeader, Table, Button } from "antd";
import { useHistory } from "react-router-dom";

interface ActionConfig {
  label: string;
  to: string;
  type?: any;
}

interface Props {
  data: any[];
  title?: string;
  subTitle?: string;
  actions?: ActionConfig[];
  columns?: Record<string, any>[];
}

export default function EntityList({
  title,
  subTitle,
  data,
  actions = [],
  columns = [],
}: Props) {
  const history = useHistory();

  return (
    <El p={4}>
      <PageHeader
        title={title}
        subTitle={subTitle}
        extra={actions.map(({ label, to, type }) => (
          <Button onClick={() => history.push(to)} type={type}>
            {label}
          </Button>
        ))}
      >
        {data ? (
          <Table
            dataSource={data}
            columns={columns.map(({ key, ...attrs }) => ({
              ...attrs,
              key,
              dataIndex: key,
            }))}
          />
        ) : (
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
        )}
      </PageHeader>
    </El>
  );
}
