import React, { useContext, useEffect } from 'react';
import { Context } from '../store/appContext'
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import { BuyerCheckbox } from './BuyerCheckbox';
import * as Yup from 'yup';


export const BuyerSignUp = () => {
    const { store, actions} = useContext(Context);

    useEffect(() => {
      actions.getSignUp2()
    }, []);

    const validate = Yup.object({
        firstname: Yup.string()
          .max(50, 'Supera los caracteres permitidos.')
          .required('Campo requerido.'),
        lastname: Yup.string()
          .max(50, 'Supera los caracteres permitidos.')
          .required('Campo requerido.'),
        rut: Yup.string()
          .min(11, 'Debe ingresar un rut válido.')
          .max(12, 'Supera los caracteres permitidos.')
          .required('Campo requerido.'),
        email: Yup.string()
          .email('Email inválido.')
          .required('Campo requerido.'),
        password: Yup.string()
          .min(8, 'La contraseña debe contener mínimo 8 caracteres.')
          .max(20, 'Supera los caracteres permitidos.')
          .required('Campo requerido.'),
        address: Yup.string()
          .max(50)
          .required('Campo requerido.'),
        phonenumber: Yup.string()
          .min(9, 'Debe ingresar un número válido de 9 dígitos.')
          .max(9, 'Debe ingresar un número válido de 9 dígitos.')
          .required('Campo requerido.'),
        acceptedTerms: Yup.boolean()
          .required('Campo requerido.')
          .oneOf([true], 'Debe aceptar los términos y condiciones para poder continuar.'),
    })
    
    return (
        <Formik
            initialValues={{
                firstname: '',
                lastname: '',
                rut: '',
                email: '',
                password: '',
                address: '',
                phonenumber: '',
                acceptedTerms: false
            }}
            validationSchema={validate}
            onSubmit={values => {
              actions.getSignUp2(values);
            }}>
            {formik => (
                <div>
                    <h4 className="titulo">Registrese como comprador</h4>
                    {console.log(formik)}
                    <Form>
                        <TextField label="Nombre" name="firstname" type="text" />
                        <TextField label="Apellidos" name="lastname" type="text" />
                        <TextField label="RUT" name="rut" type="text" placeholder="Ej: 12.345.678-9" />
                        <TextField label="Email" name="email" type="email" />
                        <TextField label="Contraseña" name="password" type="password" placeholder="Mínimo 8 caracteres" />
                        <TextField label="Dirección" name="address" type="text" placeholder="Comuna, Región" />
                        <TextField label="Teléfono celular" name="phonenumber" type="text" placeholder="Ingrese un número válido de 9 dígitos" />
                        

                        <BuyerCheckbox name="acceptedTerms" className="checkbox"><span className="textcb">He leído y acepto los términos y condiciones</span></BuyerCheckbox>
                        
                        <button className="btn btn-primary mt-3" type="submit">Registrarse</button>
                    </Form>
                </div>
            )}
        </Formik>
    );
};