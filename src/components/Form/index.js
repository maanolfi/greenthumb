import React from 'react'
import PropTypes from 'prop-types'
import * as yup from 'yup'

import { ErrorMessage, Formik, Form as FormikForm, Field } from 'formik'

import { Div } from './styled'

const validations = yup.object().shape({
  title: yup.string().required(),
  link: yup.string().required(),
  description: yup.string().required(),
  tags: yup.string().required(),
})

const Form = ({ initialValues, handleSubmit }) => {

  return(
    <Div>
      <span>+ Add new tool</span>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}
      validationSchema={validations}
      validateOnBlur={false}
      validateOnChange={false}
      >

        <FormikForm>
            <ErrorMessage component='span' name='title' />
            <label  htmlFor='title'>Tool Name</label>
            <Field name='title' type='text' />

            <label  htmlFor='link'>Tool Link</label>
            <Field name='link' type='text' />

            <label  htmlFor='description'>Tool description</label>
            <Field name='description' type='text' />

            <label  htmlFor='tags'>Tags</label>
            <Field name='tags' type='text' placeholder='comma separated' />

            <div className="button">
            <button type='submit'>Add tool</button>
            </div>

          </FormikForm>


      </Formik>
    </Div>
  )
}

Form.propTypes = {
  initialValues: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

export default Form
