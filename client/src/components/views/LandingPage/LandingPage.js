import React from 'react'
import { Formik } from 'formik';
import * as Yup from 'yup';
import { createTask } from "../../../_actions/user_actions";
import { useDispatch, useSelector } from "react-redux";

import {
  Form,
  Input,
  Button,
} from 'antd';
const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  };
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };
function LandingPage(props) {
    const dispatch = useDispatch();
    let state = useSelector(state => state);

    console.log(state )
    return (
    <Formik
      initialValues={{
        name: '',
    
        
      }}
      validationSchema={Yup.object().shape({
        name: Yup.string()
          .required('Email is required'),
       
       
        
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {

          let dataToSubmit = {
            name: values.name,
            
          };

          dispatch(createTask(dataToSubmit)).then(response => {
            console.log(response)
            if (response.payload.task) {
              props.history.push("/bulk-delete");
            } else {
              alert("task not created")
            }
          })

          setSubmitting(false);
        }, 500);
      }}
    >
      {props => {
        const {
          values,
          touched,
          errors,
          dirty,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset,
        } = props;
        return (
          <div className="app">
             <h2>Create Task</h2>
            <Form style={{ minWidth: '375px' }} {...formItemLayout} onSubmit={handleSubmit} >
              <Form.Item required label="Name" hasFeedback validateStatus={errors.email && touched.email ? "error" : 'success'}>
                <Input
                  id="name"
                  placeholder="Task Name"
                  type="text"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.name && touched.name ? 'text-input error' : 'text-input'
                  }
                />
                {errors.name && touched.name && (
                  <div className="input-feedback">{errors.name}</div>
                )}
              </Form.Item>
              <Form.Item {...tailFormItemLayout}>
                <Button onClick={handleSubmit} type="primary" disabled={isSubmitting}>
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
    
}

export default LandingPage
