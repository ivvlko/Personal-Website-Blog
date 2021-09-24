import AuthorizedCrud from '../../services//AuthorizedCrud';
import {useHistory} from 'react-router-dom';

const WorkRequest = (props) => {

    const history = useHistory();
    const endpoint = `http://127.0.0.1:8000/api/work-requests/${props.id}`;

    const deleteObject = () => {
        AuthorizedCrud('DELETE', endpoint);
        history.push('/contact');
    };

    return (
    <section>
        
       <h2>Type: {props.typeOfWork}</h2>
       
       <h2>Short Description: {props.shortDescription}</h2>
       <h2>Expected Deadline: {props.expectedToBeDone}</h2>
       <h2>Budget: {props.budget}</h2>
       <img src={props.imageLayout} alt="layout of project"/>
       <h2>Email: {props.email}</h2>
       <h2>Phone: {props.phone}</h2>
       <h2>Is Answered : {props.isAnswered}</h2>
       <br/>
       <button onClick={deleteObject}>Mark Answered</button>



    </section>
    )

}

export default WorkRequest;