import * as React from "react";
import El from "ui-box-plus";
import { PageHeader, Button } from "antd";
import { useHistory } from "react-router-dom";
import { Field, Formik } from "formik";

interface FormField {
  name: string;
  type: "text" | "multiline" | "select" | "checkbox" | "file";
  label: string;
  config: Record<string, any>;
}

interface FormConfig {
  fields: FormField[];
}

interface Props {
  title?: string;
  subTitle?: string;
  form: FormConfig;
}

export default function EntityForm({ title, subTitle, form }: Props) {
  const history = useHistory();

  return (
    <El p={4}>
      <PageHeader
        title={title}
        subTitle={subTitle}
        extra={[<Button type="primary">Save</Button>]}
      >
        <Formik
          initialValues={{}}
          onSubmit={() => {}}
          render={() => (
            <>
              {form.fields.map(({ name }) => (
                <Field name={name}>
                  <input type="text" />
                </Field>
              ))}
            </>
          )}
        />
      </PageHeader>
    </El>
  );
}
