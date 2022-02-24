import { useState } from "react";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { dispatchLoginWeatherPos } from "../../../../../Redux/Actions/Auth";

export function useForm() {
  const [location, setLocation] = useState({
    fullName:"",
    Pays:''
  });
const navigate = useNavigate()
  const handelChange = (e) => {
    const { name, value } = e.target;
    setLocation({
      ...location,
      [name]: value,
    });
  };

  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    await dispatch({ type: "LOGIN", payload: data });
    dispatchLoginWeatherPos(dispatch,data,navigate)
  };

  const lengthRegEx = /(?=.{8,})/;
  let validationSchema = Yup.object().shape({
    fullName: Yup.string()
      .min(8, "le nom est trop court - doit être de 8 caractères minimum.")
      .max(
        35,
        "Le nom complet est trop long - doit être de 35 caractères maximum."
      )
      .matches(lengthRegEx, "Doit contenir au moins 8 caractères !")
      .required("le nom complet est requis"),

      Pays: Yup.string()
      .min(4, "le Pays est trop court - doit être de 8 caractères minimum.")
      .max(
        35,
        "Le nom du Pays est trop long - doit être de 35 caractères maximum."
      )
      .required("le nom complet est requis"),
  });

  return {
    validationSchema,
    onSubmit,
    dispatch,
    handelChange,
    location
  };
}
