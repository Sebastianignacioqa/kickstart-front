import React, { useContext, useEffect } from 'react';
import { Context } from '../store/appContext'
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import { MySelect } from './MySelect';
import { MyCheckbox } from './MyCheckbox';
import * as Yup from 'yup';


export const SellerSignUp = () => {
    const { store, actions} = useContext(Context);

    useEffect(() => {
      actions.getSignUp()
    }, []);

    const validate = Yup.object({
        firstName: Yup.string()
          .max(50, 'Supera los caracteres permitidos.')
          .required('Campo requerido.'),
        lastName: Yup.string()
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
          .required('Campo requerido.'),
        address: Yup.string()
          .required('Campo requerido.'),
        phoneNumber: Yup.string()
          .min(9, 'Debe ingresar un número válido de 9 dígitos.')
          .max(9, 'Debe ingresar un número válido de 9 dígitos.')
          .required('Campo requerido.'),
        storeName: Yup.string()
          .max(20)
          .required('Campo requerido.'),
        linkRRSS: Yup.string()
          .max(100, 'Supera los caracteres permitidos.')
          .required('Campo requerido.'),
        category: Yup.string()
          .oneOf(
              ['artesania', 'belleza', 'joyeria', 'musica', 'papeleria', 'vestuario', 'otro']
          )
          .required('Debe seleccionar el rubro de su tienda para poder continuar.'),
        acceptedTerms: Yup.boolean()
          .required('Campo requerido.')
          .oneOf([true], 'Debe aceptar los términos y condiciones para poder continuar.'),
    })
    
    return (
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                rut: '',
                email: '',
                password: '',
                address: '',
                phoneNumber: '',
                storeName: '',
                linkRRSS: '',
                category: '',
                acceptedTerms: false
            }}
            validationSchema={validate}
            onSubmit={values => {
                console.log(values)
            }}>
            {formik => (
                <div>
                    <h4 className="titulo">Registre su Tienda</h4>
                    <Form onSubmit={actions.handleSubmit} onChange={actions.handleChange}>
                        <TextField label="Nombre" name="firstName" type="text" value={store.signUpForm.firstName}/>
                        <TextField label="Apellidos" name="lastName" type="text" value={store.signUpForm.lastName}/>
                        <TextField label="RUT" name="rut" type="text" placeholder="Ej: 12.345.678-9" value={store.signUpForm.rut}/>
                        <TextField label="Email" name="email" type="email" value={store.signUpForm.email}/>
                        <TextField label="Contraseña" name="password" type="password" placeholder="Mínimo 8 caracteres" value={store.signUpForm.password}/>
                        <TextField label="Dirección" name="address" type="text" placeholder="Comuna, Región" value={store.signUpForm.address}/>
                        <TextField label="Teléfono celular" name="phoneNumber" type="text" placeholder="Ingrese un número válido de 9 dígitos" value={store.signUpForm.phoneNumber}/>
                        <TextField label="Nombre de la tienda" name="storeName" type="text" value={store.signUpForm.storeName}/>
                        <TextField label="Red social de la tienda" name="linkRRSS" type="text" placeholder="Link de Instagram o Facebook" value={store.signUpForm.linkRRSS}/>
                        <MySelect label="Categorías" name="category" className="form-select shadow-none">
                            <option value="">Seleccione el rubro de su tienda</option>
                            <option value="artesania">Artesanía</option>
                            <option value="belleza">Belleza</option>
                            <option value="joyeria">Joyería</option>
                            <option value="musica">Música</option>
                            <option value="papeleria">Papelería</option>
                            <option value="vestuario">Vestuario y Calzado</option>
                            <option value="otro">Otro</option>
                        </MySelect>

                        <MyCheckbox name="acceptedTerms" className="checkbox"><span className="textcb">He leído y acepto los términos y condiciones</span></MyCheckbox>
                        
                        <button className="btn btn-primary mt-3" type="submit">Registrarse</button>
                    </Form>
                </div>
            )}
        </Formik>
    );
};