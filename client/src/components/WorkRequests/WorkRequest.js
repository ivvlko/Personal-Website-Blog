const WorkRequest = (props) => {

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



    </section>
    )

}

export default WorkRequest;