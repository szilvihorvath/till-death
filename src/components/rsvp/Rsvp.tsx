import { useCallback, useState } from "react";
import { Button, ConfigProvider, Form, Input, Radio, Space, notification } from "antd";
import { useWindowSize } from "@uidotdev/usehooks";
import Confetti from 'react-confetti';
import "./styles.css";

const GOOGLE_FORM_URL = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfuOmvKE-he7fc-oB505ttSbb0qjKl7xa4erAvnqWoQMmDyUg/formResponse";

type FormData = {
  email: string;
  attendance: string;
  names: string;
  dietaryRequirements: string;
  song: string;
};

//TODO: 
// error handling
// add new page for yes and no
// move confetti to yes page 

const RsvpComponent = () => {
    const [form] = Form.useForm();
    const [api, contextHolder] = notification.useNotification();
    const [isExploding, setIsExploding] = useState(false);
    const { width, height } = useWindowSize();
    console.log('width ', width)

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
          // TODO: add a message instead this notification?
          // api.success({
          //   message: "Submitted successfully",
          // });
          setIsExploding(true);
        } catch (error: unknown) {
          console.log('there was an error')
          // TODO: add message when there's an error to try again or let us know
          if (error instanceof Error) {
            console.log('there was an error')
            return api.error({
              message: error.message,
            });
          }
          return String(error)
        } 
      },
      [api, form]
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
            rules={[{ required: true, message: "Please fill in the email address" }]}
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
            rules={[{ required: true, message: "Please fill in the name or names of people attending" }]}
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
          {isExploding && <Confetti
          style={{ zIndex: 9999 }}
          width={width || 0}
          height={height && height * 3 || 0} />}
        </div>
    )    
}

export { RsvpComponent };