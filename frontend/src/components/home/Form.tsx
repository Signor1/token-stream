import emailjs from "@emailjs/browser";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import { useState } from "react";
import { toast } from "sonner";
import * as Yup from "yup";
import { BsExclamation } from "react-icons/bs";
import { Button } from "../ui/button";
import { TbLoaderQuarter } from "react-icons/tb";

type ValueTypes = {
    name: string
    email: string
    message: string
}
const ContactForm = () => {
    const [isSending, setIsSending] = useState(false);

    const initialValues: ValueTypes = { name: "", email: "", message: "" };

    const validationSchema = Yup.object({
        name: Yup.string().required("Name is required"),
        email: Yup.string().email("Invalid Email Format").required("Email is required"),
        message: Yup.string().required("Message is required"),
    });

    const onSubmit = (values: ValueTypes, { resetForm }: FormikHelpers<ValueTypes>) => {
        setIsSending(true);
        const { name, email, message } = values;
        const emailContent = { from_name: name, user_email: email, user_number: "", subject: "From StreamFlow", message };
        emailjs
            .send("signor_portfolio", "template_cjerd4l", emailContent, "w8eANHd1D5O0ml1C7")
            .finally(() => {
                setIsSending(false);
                resetForm({ values: initialValues });
                toast.success("Message Sent Successfully", { position: "top-right" });
            });
    };

    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            <Form className="w-full flex flex-col gap-3">
                {["name", "email", "message"].map((field) => (
                    <div key={field} className="relative w-full font-barlow">
                        <Field
                            type={field === "message" ? "" : "text"}
                            as={field === "message" ? "textarea" : ""}
                            id={field}
                            className={`block w-full rounded-md border text-sm px-3 py-2 placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50 bg-gray-900 border-gray-700 focus-visible:ring-sky-400 font-barlow text-gray-200 ${field === "message" ? "h-[100px] resize-y" : "h-10 "}`}
                            name={field}
                            placeholder={`Enter your ${field}`}
                        />
                        <ErrorMessage name={field}>{(errorMsg) => <div className="pt-0 ml-2 text-red-500 text-xs font-barlow font-light flex items-center">{errorMsg}<BsExclamation /></div>}</ErrorMessage>
                    </div>
                ))}

                <Button
                    type="submit"
                    className={`text-gray-100 text-sm mt-6 font-barlow px-4 py-2 flex justify-center items-center gap-1 bg-sky-500 hover:bg-emerald-500 ${isSending ? "opacity-50 cursor-not-allowed" : ""}`}
                    disabled={isSending}
                >
                    {
                        isSending ? <span className="flex items-center">
                            <TbLoaderQuarter className="animate-spin text-2xl mr-1" />
                            Sending...</span> :
                            <span>Submit</span>
                    }

                </Button>
            </Form>
        </Formik>
    );
};

export default ContactForm