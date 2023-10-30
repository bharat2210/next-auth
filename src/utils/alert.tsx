import { toast } from "react-toastify";
import type {TypeOptions} from 'react-toastify';
const alert = async (messages: any, messageType:TypeOptions) => {
  if (Array.isArray(messages)) {
    for (const message of messages) {
      toast(message,{type:messageType});
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  } else{
    toast(messages,{type:messageType})
  }
};
export default alert;