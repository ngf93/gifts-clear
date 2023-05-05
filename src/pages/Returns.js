import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Breadcrumbs from '../components/utils/Breadcrumbs';

export default function Returns(props) {
    return (
        <main>
            <Container>
                <Breadcrumbs/>
                <Row>
                    <Col xl={9}>
                        <section className='text mb-8'>
                            <h1>Возврат</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor justo lectus mauris pulvinar pulvinar ornare ante felis. Quis tellus mauris sed phasellus elit aliquam. Accumsan, varius ornare facilisis ac. Arcu commodo sem dui a vestibulum, senectus augue a. Molestie aenean nisl sit id aliquam a, eu molestie eu. Ipsum adipiscing sagittis, gravida facilisi. Ut donec et est nec ullamcorper enim sed vitae massa. Nulla fames pretium ut nulla a. Sed eu in proin nullam gravida. Ac eget a aliquam porttitor libero tristique. Fames donec neque porttitor tellus. Velit morbi mauris sit massa purus velit commodo. Cras enim augue urna,in cursus nulla praesent.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor justo lectus mauris pulvinar pulvinar ornare ante felis. Quis tellus mauris sed phasellus elit aliquam. Accumsan, varius ornare facilisis ac. Arcu commodo sem dui a vestibulum, senectus augue a. Molestie aenean nisl sit id aliquam a, eu molestie eu. Ipsum adipiscing sagittis, gravida facilisi. Ut donec et est nec ullamcorper enim sed vitae massa. Nulla fames pretium ut nulla a. Sed eu in proin nullam gravida. Ac eget a aliquam porttitor libero tristique. Fames donec neque porttitor tellus. Velit morbi mauris sit massa purus velit commodo. Cras enim augue urna,in cursus nulla praesent.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor justo lectus mauris pulvinar pulvinar ornare ante felis. Quis tellus mauris sed phasellus elit aliquam. Accumsan, varius ornare facilisis ac. Arcu commodo sem dui a vestibulum, senectus augue a. Molestie aenean nisl sit id aliquam a, eu molestie eu. Ipsum adipiscing sagittis, gravida facilisi. Ut donec et est nec ullamcorper enim sed vitae massa. Nulla fames pretium ut nulla a. Sed eu in proin nullam gravida. Ac eget a aliquam porttitor libero tristique. Fames donec neque porttitor tellus. Velit morbi mauris sit massa purus velit commodo. Cras enim augue urna,in cursus nulla praesent.</p>
                        </section>
                    </Col>
                </Row>
            </Container>
        </main>
    );
}