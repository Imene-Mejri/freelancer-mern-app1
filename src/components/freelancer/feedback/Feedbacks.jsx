import FeedbackCard from "./FeedbackCard";
import {feedbacks} from "../../../fake"
import {useSelector,useDispatch} from 'react-redux'
import { useEffect } from "react";
import { getAllinnvoice } from "../../../redux/action/innvoiceFree-action";
import  AddInnvoice  from "./Add";
const Feedbacks = () => {
  const dispatch = useDispatch()
  useEffect(() => {
  dispatch(getAllinnvoice ())
  }, [])
  const feedbacks = useSelector(state => state.innvoice.innvoice?.innvoice1)
    return ( 
        <div>
        <AddInnvoice/>
        <p class="Fetitle">Feedbacks  :</p>
        <ul class="Fes">
          {feedbacks?.map((f) => (
            <FeedbackCard key={f._id} feedback={f} />
          ))}
        </ul>
        </div>
     );
}
 
export default Feedbacks;