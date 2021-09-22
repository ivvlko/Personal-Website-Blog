import WorkRequest from "./WorkRequest";
import { useState, useEffect } from 'react';
import refreshToken from "../Auth/RefreshToken";

const workRequestsEndpoint = 'http://127.0.0.1:8000/api/work-requests-list/'

const WorkRequestsList = () => {

    const [hasErrors, setHasErrors] = useState({ hasError: false, errorMessage: '' });
    const [requests, setRequests] = useState([]);


    useEffect(() => {

        refreshToken()
            .then(
                fetch(workRequestsEndpoint, { headers: { 'Authorization': `Bearer ${localStorage.getItem('access')}` } })
                    .then(res => {
                        if (res.status >= 400) {
                            throw Error;
                        }
                        return res.json()
                    })
                    .then(data => {
                        setHasErrors(false);
                        setRequests(data)
                    })
                    .catch(e => {
                        setHasErrors({ hasError: true, errorMessage: e });
                    }))

    }, []);


    if (hasErrors.hasError === true) {
        return <div>
            <h1 style={{ 'color': "red" }}>You have No Rights to Access This Page</h1>
        </div>
    } else {
        return (
            <section>
                {requests.map(req => <WorkRequest key={req.id}
                    typeOfWork={req.type_of_work}
                    shortDescription={req.short_description}
                    expectedToBeDone={req.expected_to_be_done_until}
                    budget={req.budget}
                    imageLayout={req.image_layout}
                    email={req.email}
                    phone={req.phone_number}
                    isAnswered={req.answered}
                />)}
            </section>
        )
    }
}

export default WorkRequestsList;
