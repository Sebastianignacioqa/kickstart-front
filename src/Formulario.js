import React, {useState} from 'react';
import injectContext from "./store/appContext";
import { Formik, Form, Field, ErrorMessage } from 'formik';

const Formulario = () => {

	const [formsent] = useState(false);
	
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
                            
							
						</div>


										
						

						<button type="submit">Registrarse</button>
						{formsent && <p className="exito">Formulario enviado con exito!</p>}
					</Form>
				)}


				
			</Formik>
		</>
	);
}
 
export default injectContext(Formulario);