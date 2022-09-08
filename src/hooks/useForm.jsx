import { useState } from "react";

export default function useForm(initState) {
  const [state, setState] = useState(initState);

  const onChangeText = (value, field) => {
    setState({
      ...state,
      [field]: value,
    });
  };
  return {
    ...state,
    form: state,
    onChangeText,
  };
}
