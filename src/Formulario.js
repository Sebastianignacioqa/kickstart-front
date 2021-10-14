import React, {useState} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const Formulario = () => {
	const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
	return (
		<>
			<Formik
				initialValues={{
					name: '',
                    lastname: '',
                    RUT: '',
                    password: '',
					mail: '',
                    address: '',
                    phonenumber: ''
				}}
				validate={(values) => {
					let errors = {};

					// Validacion 
					if(!values.name){
						errors.name = 'Por favor ingresa un nombre'
					} else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name)){
						errors.name = 'El nombre solo puede contener letras y espacios'
					}

                    if(!values.lastname){
						errors.lastname = 'Por favor ingresa un apellido'
					} else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.lastname)){
						errors.lastname = 'El apellido solo puede contener letras y espacios'
					}

                    if(!values.RUT){
						errors.RUT = 'Por favor ingresa tu Rut'
					} else if(!/^[0-9.-]+$/.test(values.RUT)){
						errors.RUT = 'El Rut solo puede contener numeros, puntos y guion.'
					}

                    if(!values.password){
						errors.password = 'Por favor ingresa una contraseña'
					} //else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]$/.test(values.password)){
						//errors.password = 'La contraseña puede contener letras, numeros, puntos, guiones y guion bajo.'
					//}

					// Validacion correo
					if(!values.mail){
						errors.mail = 'Por favor ingresa un correo electronico'
					} else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.mail)){
						errors.mail = 'El correo ingresado debe ser uno valido, puede contener letras, numeros, puntos, guiones y guion bajo.'
					}

                    if(!values.address){
						errors.address = 'Por favor ingresa un correo electronico'
					} //else if(!/^[a-zA-Z0-9.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.address)){
						//errors.address = 'La direccion solo puede contener letras, numeros, puntos y guiones.'
					//}

                    if(!values.phonenumber){
						errors.phonenumber = 'Por favor ingresa tu numero de telefono movil'
					} else if(!/^[0-9]+$/.test(values.phonenumber)){
						errors.phonenumber = 'El numero de telefono movil solo puede contener numeros.'
					}

					return errors;
				}}

				onSubmit={(values, {resetForm}) => {
					resetForm();
					console.log('Formulario enviado');
					cambiarFormularioEnviado(true);
					
				}}
			>
				{( {errors} ) => (
					<Form className="formulario">
						<div>
							<label htmlFor="name">Nombre</label>
							<Field
								type="text" 
								id="name" 
								name="name" 
								placeholder="Juan"
							/>
							<ErrorMessage name="name" component={() => (<div className="error">{errors.name}</div>)} />
						</div>

                        <div>
							<label htmlFor="lastname">Apellido</label>
							<Field
								type="text" 
								id="lastname" 
								name="lastname" 
								placeholder="Perez"
							/>
							<ErrorMessage name="lastname" component={() => (<div className="error">{errors.lastname}</div>)} />
						</div>

                        <div>
							<label htmlFor="RUT">Rut</label>
							<Field
								type="text" 
								id="RUT" 
								name="RUT" 
								placeholder="Ej: 11.111.111-1"
							/>
							<ErrorMessage name="RUT" component={() => (<div className="error">{errors.RUT}</div>)} />
						</div>

                        <div>
							<label htmlFor="password">Contraseña</label>
							<Field
								type="text" 
								id="password" 
								name="password" 
								placeholder="Mínimo 8 caracteres"
							/>
							<ErrorMessage name="password" component={() => (<div className="error">{errors.password}</div>)} />
						</div>


						<div>
							<label htmlFor="mail">Correo</label>
							<Field
								type="mail" 
								id="mail" 
								name="mail" 
								placeholder="correo@correo.com" 
							/>
							<ErrorMessage name="mail" component={() => (<div className="error">{errors.mail}</div>)} />
						</div>

                        <div>
							<label htmlFor="address">Direccion</label>
							<Field
								type="text" 
								id="address" 
								name="address" 
								placeholder="Direccion" 
							/>
							<ErrorMessage name="address" component={() => (<div className="error">{errors.address}</div>)} />
						</div>

                        <div>
							<label htmlFor="phonenumber">Telefono movil</label>
							<Field
								type="text" 
								id="phonenumber" 
								name="phonenumber" 
								placeholder="Ej:912345678" 
							/>
							<ErrorMessage name="phonenumber" component={() => (<div className="error">{errors.phonenumber}</div>)} />
						</div>

                        <div>
							<label>
								<Field type="radio" name="condiciones" value="acepto" /> He leído y acepto los términos y condiciones
							</label>
                            <label>
                                <Field type="checkbox" id="terminos" name="terminos" value="acepto" /> He leído y acepto los términos y condiciones
                                
                            </label>

                            <div id="checkbox-group">Checked</div>
                            <div role="group" aria-labelledby="checkbox-group">
                                <label>
                                    <Field type="checkbox" name="checked" value="One" />
                                    One
                                </label>
                                
                            </div>
							
						</div>


										
						

						<button type="submit">Registrarse</button>
						{formularioEnviado && <p className="exito">Formulario enviado con exito!</p>}
					</Form>
				)}


				
			</Formik>
		</>
	);
}
 
export default Formulario;