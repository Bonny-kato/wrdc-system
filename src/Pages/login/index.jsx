import {FieldWrapper} from "../registration";
import {Input} from "../../components/form-control";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import * as Yup from "yup";
import {useMutation} from "react-query";
import {login} from "../../provider/api";
import {useEffect, useRef, useState} from "react";
import {useAuth} from "../../provider/auth";
import Button from "../../components/Button";
import {getValueFromLocalStorage} from "../../hooks/useLocalStorageState";


const Login = () =>{
    const {saveAuthUser} = useAuth();
    const currTheme = getValueFromLocalStorage('theme', 'light');

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

    const data = [
        {
            firstName: "Bonny",
            lastName: "kato",
            email: "black@gmai.com",
            address: "ubungo 345",
            postcode: "9002"
        },{
            firstName: "Bonny2",
            lastName: "kato2",
            email: "black@gmai.com2",
            address: "ubungo 345",
            postcode: "9002"
        },
    ];

    return (
        <section theme={currTheme} className={'flex  justify-center items-center h-screen bg-skin-primary'}>
            <form onSubmit={handleSubmit(onSubmit)} className={'bg-skin-secondary shadow-base space-y-3 w-[30%] p-10 rounded-lg'} action="">
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
                    <Button type={'submit'}  loading={isLoading} className={'bg-accent4 p-4 w-full'}>
                        Login
                    </Button>
                </div>
            </form>
        </section>
    )
}
export default Login;