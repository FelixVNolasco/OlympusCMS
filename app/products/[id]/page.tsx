import Image from 'next/image'
import Link from 'next/link';
import { getProduct } from '../../lib/api/products';
import { Formik, Form, Field, ErrorMessage } from "formik";

interface UpdateProduct { img: string, title: string, categories: Array<String>, desc: string, price: number }

export default async function page({ params }: any) {

  const { id } = params;
  const product = await getProduct(id);
  const { img, title, categories, desc, price, } = product;

  return (

    <Formik
      initialValues={{ img, title, categories, desc, price }}
      validate={(values: any) => {
        const errors: UpdateProduct = { img, title, categories, desc, price };
        if (!values.img) {
          errors.img = "Image is required";
        }
        if (!values.password) {
          errors.title = "Title is required";
        }
        if (!values.desc) {
          errors.title = "Description is required";
        }
        if (!values.price) {
          errors.title = "Price is required";
        }
        return errors;
      }}
      onSubmit={async (values: UpdateProduct, { setSubmitting }: { setSubmitting: any }) => {
        try {
          setSubmitting(true);
          const response: any = await fetch(
            `https://olympus-backend.vercel.app/api/products/${id}`,
            {
              method: "POST",
              // body: values
            }
          );
          const userData = response.data;
          // dispatch(loginSuccess(userData));
          // navigate("/");
          // setSubmitting(false);
        } catch (error) {
          setSubmitting(false);
        }
      }}
    >
      {({ isSubmitting }: { isSubmitting: any }) => (
        <Form>
          <label className="text-md" htmlFor="username">
            Titel
          </label>
          <Field
            className="rounded-md p-2 border-2 border-slate-400 transition ease-in-out duration-300 focus:outline-none focus:border-2 focus:border-slate-500 w-full"
            type="username"
            name="username"
            value={title}
          />
          <ErrorMessage
            className="text-red-500"
            name="username"
            component="div"
          />
          <div className="mt-4">
            <label className="text-md" htmlFor="password">
              Description
            </label>
            <Field
              className="rounded-md p-2 border-2 border-slate-400 transition ease-in-out duration-300 focus:outline-none focus:border-2 focus:border-slate-500 w-full"
              type="desc"
              name="desc"
              value={desc}
            />
            <ErrorMessage
              className="text-red-500"
              name="username"
              component="div"
            />
          </div>
          <div className="flex justify-end mt-4">
            <button
              className="p-3 bg-green-200 transition ease-in-out duration-300 hover:bg-green-300 rounded-md text-sm font-semibold cursor-pointer"
              type="submit"
              disabled={isSubmitting}
            >
              Actualizar
            </button>
          </div>
        </Form>
      )}
    </Formik>
  )
}