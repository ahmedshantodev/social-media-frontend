import * as Yup from "yup"

export const registration = Yup.object({
    firstName: Yup.string().min(4).max(20).required("please enter your firstname"),
    email: Yup.string().email().required("please enter a valid email"),
    password: Yup.string().min(6).max(20).required("password enter your password"),
    birthDate: Yup.string().required("please select your birth date"),
    birthMonth: Yup.string().required("please select your birth month"),
    birthYear: Yup.string().required("please select your birth year"),
    gender: Yup.string().required("please select your gender"),
})