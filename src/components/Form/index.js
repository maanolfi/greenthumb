import React, { Fragment } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'

import { postMsgPlant  } from '../../store/modules/plants/actions'

import { ContentForm } from './styles.js'
import EnvelopImg from '../../assets/illustrations/envelop.png'

const FormPlant = () => {

  const dispath = useDispatch();
  const idPlant = useSelector(state => state.plants.plant.id)
  const mgssuccess = useSelector(state => state.plants.mgssuccess)
  const { register, handleSubmit, errors } = useForm()

  const onSubmit = data => {
    const datapost = {
      ...data,
      id: idPlant
    }
    dispath(postMsgPlant(datapost))
  }

  return(
    <ContentForm>
      {
        !mgssuccess ?
          <Fragment>
            <h2>Nice pick! </h2>
            <p>Tell us your name and e-mail and we will get in touch regarding
            your order ;)</p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <label>Name</label>
              <input
              name='name'
              placeholder='Crazy Plant Person'
              ref={register({ required: true})}/>
              {errors.name && <span>*is required</span>}
              <label className={errors.email ? 'error' : null}>Email</label>
              <input
              name='email'
              placeholder='plantperson@email.com'
              className={errors.email ? 'error input' : null}
              ref={register({
                required: true,
                pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })}/>
              {errors.email && <span>Please provide a valid e-mail.</span>}
              <button type="submit">send</button>
            </form>
          </Fragment>
      :
          <Fragment>
            <div className='center'>
              <h2>Thank you!</h2>
              <p>You will hear from us soon. Please check your e-mail!</p>

              <img src={EnvelopImg} alt="Envelop, thank you."/>
            </div>
          </Fragment>
    }
    </ContentForm>
  )
}

export default FormPlant
