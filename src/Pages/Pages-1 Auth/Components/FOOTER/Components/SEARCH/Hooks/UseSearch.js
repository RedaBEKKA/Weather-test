import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export function UseSearch() {
  const [Search, setSearch] = useState();

  const navigate = useNavigate();

  const handelChange = (e) => {
    const { name, value } = e.target;
    setSearch({
      ...Search,
      [name]: value,
    });
  };

  const dispatch = useDispatch();

  return {
    dispatch,
    handelChange,
    Search
  };
}
