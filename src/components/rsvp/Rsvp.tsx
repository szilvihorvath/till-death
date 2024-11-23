import { useCallback } from "react";
import { Button, ConfigProvider, Form, Input, Radio, Space, notification } from "antd";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const GOOGLE_FORM_URL = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfuOmvKE-he7fc-oB505ttSbb0qjKl7xa4erAvnqWoQMmDyUg/formResponse";

type FormData = {
  email: string;
  attendance: string;
  names: string;
  dietaryRequirements: string;
  song: string;
};

const RsvpComponent = () => {
    const [form] = Form.useForm();
    const [api, contextHolder] = notification.useNotification();
    const navigate = useNavigate();

    const isAttending = (value : string) => value === "Yes,  I'll be there"; 

    const onFinish = useCallback(
      async ({ email, attendance, names, dietaryRequirements, song } : FormData) => {
        try {
          await fetch(
            GOOGLE_FORM_URL, {
              method: 'post',
              body: new URLSearchParams({
                                "entry.877086558": attendance,
                                "entry.1498135098": names,
                                "entry.1260370108": dietaryRequirements ?? "",
                                "entry.2606285": song ?? "",
                                emailAddress: email,
                              }),
              mode: 'no-cors'
            }
          );
          form.resetFields();

          setTimeout(() => {
            isAttending(attendance) ? navigate('/thanks?attendance=yes') : navigate('/thanks?attendance=no')}
            , 2000);
        } catch (error: unknown) {
          console.log('there was an error')
          if (error instanceof Error) {
            console.log('there was an error')
            return api.error({
              message: error.message,
            });
          }
          return String(error)
        } 
      },
      [api, form, navigate]
    );


    return (
        <div className="rsvp">
          <h1>RSVP</h1>
          <ConfigProvider
            theme={{
              token: {
                // Seed Token
                colorPrimary: '#D69A43',
                colorTextBase: '#D69A43',
                borderRadius: 10,

                // Alias Token
                colorBgContainer: '#2E2E30',
              }
            }}
          >
          {contextHolder}
          <Form
            form={form}
            layout="vertical"
            wrapperCol={{ span: 18 }}
            onFinish={onFinish}
          >
          <Form.Item
            name="email"
            label="Email"
            rules={[{ required: true, message: "Please fill in the email address" }, {type: "email", message: "Please provide a valid email address"}]}
          >
            <Input />
          </Form.Item> 
          <Form.Item
            name="attendance"
            label="Can you attend?"
            rules={[{ required: true, message: "Please let us know if you're attending" }]}
          >
            <Radio.Group>
              <Space direction="vertical">
                <Radio value="Yes,  I'll be there">Yes,  I'll be there</Radio>
                <Radio value="Sorry, can't make it">Sorry, can't make it</Radio>
              </Space>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            name="names"
            label="What are the names of people attending?"
          >
            <Input />
          </Form.Item> 
          <Form.Item
            name="dietaryRequirements"
            label="Have you got any dietary requirements?"
          >
            <Radio.Group>
              <Space direction="vertical">
                <Radio value="vegan">Vegan/vegetarian</Radio>
                <Radio value="gluten free">Gluten free</Radio>
                <Radio value="other">Other (please let Szilvi or Liam know)</Radio>
              </Space>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            name="song"
            label="Predict a song"
          >
            <Input />
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          </Form>
          </ConfigProvider>
        </div>
    )    
}

export { RsvpComponent };
