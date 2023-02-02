"use client"

import { Formik, Form, Field, ErrorMessage } from "formik";
import { getProduct as getProductFc } from "../../../lib/api/products";
import { useEffect, useState } from 'react';
import Image from "next/image";

// interface UpdateProduct { img: string, title: string, desc: string, price: number }

export default function Page({ params }: any) {

  const { id } = params;

  const [currentProduct, SetCurrentProduct] = useState<any>();
  const [photo, setPhoto] = useState(null);
  const [photoURL, setPhotoURL] = useState(null);

  // const { img, title, desc, price } = currentProduct;

  useEffect(() => {
    const getProduct = async () => {
      try {
        let product = await getProductFc(id);
        SetCurrentProduct(product);
      } catch (error) {
        console.log(error);
      }
    }
    getProduct();
  }, [id]);

  const handleProfileChange = (e: any) => {
    if (e.target.files[0]) {
      setPhoto(e.target.files[0])
    }
  }

  // const uploadProfilePicture = (file: any, refreshPage: any) => {
  const uploadProfilePicture = (file: any) => {
    try {      
      // const auth = getAuth();
      // const storage = getStorage();
      // onAuthStateChanged(auth, (user) => {
      //   if (user) {
      //     const fileRef = ref(storage, user.uid + ".png");
      //     uploadBytes(fileRef, file).then(() => {
      //       getDownloadURL(fileRef).then((photoURL) => {
      //         updateProfile(user, { photoURL }).then(() => {
      //           dispatch(removeLoading());
      //           Swal.fire({
      //             icon: "success",
      //             title: "Éxito",
      //             text: "Se ha actualizado la foto de perfil",
      //             didClose: () => refreshPage()
      //           })
      //         })
      //       })
      //     })
      //   }
      // })
    } catch (error) {
      // Swal.fire({
      //   icon: "success",
      //   title: "Error",
      //   text: "No ha sido posible actualizar tu cuenta",
      // });
      // dispatch(removeLoading());
    }
  }

  const handleUploadProfilePicture = () => {    
    // uploadProfilePicture(photo, refreshPage);
    uploadProfilePicture(photo);
  }


  return (
    <Formik
      initialValues={{ img: "", title: "", desc: "", price: "" }}
      validate={(values: any) => {
        const errors: { img: string, title: string, categories: string, desc: string, price: string } = { img: "", title: "", categories: "", desc: "", price: "" };
        if (!values.img) {
          errors.img = "Image is required";
        }
        if (!values.title) {
          errors.title = "Title is required";
        }
        if (!values.desc) {
          errors.desc = "Description is required";
        }
        if (!values.price) {
          errors.price = "Price is required";
        }
        return errors;
      }}
      onSubmit={ (values, { setSubmitting }: { setSubmitting: any }) => {
        try {          
          // const response: any = await fetch(
          //   `https://olympus-backend.vercel.app/api/products/${id}`,
          //   {
          //     method: "PUT",
          //     // body: values
          //   }
          // );
          // const userData = response.data;
          // dispatch(loginSuccess(userData));
          // navigate("/");
          // setSubmitting(false);
          console.log(values);
        } catch (error) {
          // setSubmitting(false);
          console.log(error);
        }
      }}
    >
      {({ isSubmitting }: { isSubmitting: any }) => (
        <Form className="flex mt-6 m-auto sm:mt-6 sm:m-auto md:mt-6 md:m-auto lg:mt-6 lg:m-auto xl:mt-2 xl:mr-6 2xl:mt-2 2xl:mr-6 w-5/6 h-full   sm:border-slate-400 border-0 sm:border-2 rounded-lg drop-shadow-lg sm:shadow-sm shadow-slate-500 p-10">
          <div className="flex flex-col items-center w-1/2">
            <Image className="rounded-md" width={256} height={256} src={(photoURL) ? photoURL : "https://res.cloudinary.com/dhyxqmnua/image/upload/v1642722284/Olympus/blank-profile-picture-973460_qb0gmg.svg"} alt="" />
            <input className="mt-4" type="file" onChange={handleProfileChange}/>  
            <button disabled={!photo} className="w-32 px-2 py-1 rounded-md bg-gray-800/90 text-slate-50 mt-1 cursor-pointer disabled:bg-gray-400 disabled:text-gray-600 disabled:cursor-not-allowed" onClick={handleUploadProfilePicture}>Upload</button>
          </div>
          <div className="flex flex-col w-1/2">
            <label className="text-md" htmlFor="title">
              Title
            </label>
            <Field
              className="rounded-md p-2 border-2 border-slate-400 transition ease-in-out duration-300 focus:outline-none focus:border-2 focus:border-slate-500 w-full"
              type="title"
              name="title"
            // value={title}
            />
            <ErrorMessage
              className="text-red-500"
              name="title"
              component="div"
            />
            <div className="mt-4">
              <label className="text-md" htmlFor="desc">
                Description
              </label>
              <Field
                className="rounded-md p-2 border-2 border-slate-400 transition ease-in-out duration-300 focus:outline-none focus:border-2 focus:border-slate-500 w-full"
                type="desc"
                name="desc"
              // value={desc}
              />
              <ErrorMessage
                className="text-red-500"
                name="desc"
                component="div"
              />
            </div>
            <div className="mt-4">
              <label className="text-md" htmlFor="price">
                Price
              </label>
              <Field
                className="rounded-md p-2 border-2 border-slate-400 transition ease-in-out duration-300 focus:outline-none focus:border-2 focus:border-slate-500 w-full"
                type="price"
                name="price"
              // value={price}
              />
              <ErrorMessage
                className="text-red-500"
                name="price"
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
          </div>
        </Form>
      )}
    </Formik>

  )
}