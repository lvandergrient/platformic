import * as React from "react";
import El from "ui-box-plus";
import { Empty, PageHeader, Table } from "antd";

interface Props {
  data: any[];
  title?: string;
  subTitle?: string;
  actions?: React.ReactElement[];
  columns?: Record<string, any>[];
}

export default function ModelList({
  title,
  subTitle,
  data,
  actions,
  columns = [],
}: Props) {
  return (
    <El p={4}>
      <PageHeader title={title} subTitle={subTitle} extra={actions}>
        {data ? (
          <Table dataSource={data} columns={columns} />
        ) : (
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
        )}
      </PageHeader>
    </El>
  );
}
