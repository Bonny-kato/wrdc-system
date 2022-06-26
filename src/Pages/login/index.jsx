import {FieldWrapper} from "../registration";
import {Input} from "../../components/form-control";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import * as Yup from "yup";
import {useMutation} from "react-query";
import {login} from "../../provider/api";
import {useEffect, useRef, useState} from "react";
import {useAuth} from "../../provider/auth";


const Login = () =>{
    const {saveAuthUser} = useAuth();
    const theme = "dark";

    // show error message after fail to login
    const [errorMessage, setErrorMessage] = useState("");
    const emailRef = useRef(null);

    const {mutate, isLoading} = useMutation(login, {
        onSuccess: ({data}) => {
            saveAuthUser(data.user, data.token);
        },
        onError: ({message}) => {
            setErrorMessage(message)
        }
    });

    console.log(errorMessage);

    const validationSchema = Yup.object({
        email: Yup.string().required("email is required").email("invalid email"),
        password: Yup.string().required("password is required"),
    });
    const {handleSubmit, register, formState:{errors}} = useForm({
        resolver:yupResolver(validationSchema)
    });

    useEffect(()=>{
        if(errorMessage){
            if(emailRef.current){
                emailRef.current.focus()
            }
        }
    }, [errorMessage])
    const onSubmit = (formData) =>{
        // console.log(formData)
        mutate(formData);
    }
    return (
        <section theme={theme} className={'flex  justify-center items-center h-screen bg-skin-primary'}>
            <form onSubmit={handleSubmit(onSubmit)} className={'bg-skin-secondary shadow space-y-3 w-[30%] p-10 rounded-lg'} action="">
                <p className={'font-semibold  text-center capitalize text-xl text-skin-base'}>
                    Login
                    </p>
                <FieldWrapper>
                    <Input
                        register={register}
                        name={'email'}
                        label={'email'}
                        errorMessage={errors.email ? errors.email.message : null}
                        isError={!!errors.email}/>
                </FieldWrapper>

                <FieldWrapper>
                    <Input
                        register={register}
                        name={'password'}
                        label={'password'}
                        errorMessage={errors.password ? errors.password.message : null}
                        isError={!!errors.password}
                        type={'password'} />
                </FieldWrapper>

                {errorMessage && <p className={'text-red-600 text-sm font-light capitalize tracking-wider'}>{errorMessage}</p>}

                <div className={'pt-2'}>

                        <button type={"submit"} className={'text-white tracking-wide  cursor-pointer hover:bg-blue-600 bg-blue-500 text-sm w-full py-3 rounded-md'}>Login</button>

                </div>
            </form>
        </section>
    )
}
export default Login;