import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver} from "@hookform/resolvers/yup";

export function Form() {
    
    const schema = yup.object().shape({
        fullName: yup.string().required(),
        email: yup.string().email().required(),
        age: yup.number().integer().min(18),
        password: yup.string().min(4).max(15).required(),
        confirmPassword: yup.string().oneOf([yup.ref("password"), null]).required(),
    });
    
    
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        console.log(data);
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Full Name..." {...register("fullName")}/><br/>
            <span>{errors.fullName?.message}</span><br/>
            <input type="text" placeholder="Email..." {...register("email")}/><br/>
            <span>{errors.email?.message}</span><br/>
            <input type="number" placeholder="age..." {...register("age")}/><br/>
            <span>{errors.age?.message}</span><br/>
            <input type="password" placeholder="Password..." {...register("password")}/><br/>
            <span>{errors.password?.message}</span><br/>
            <input type="password" placeholder="Confirm Password..." {...register("confirmPassword")}/><br/>
            <span>{errors.confirmPassword?.message}</span><br/>
            <input type="submit" />
        </form>
    )
}