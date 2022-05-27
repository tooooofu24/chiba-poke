import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ReactElement } from 'react'
import { Accordion } from 'react-bootstrap'

const Icon = () => {
  return <FontAwesomeIcon icon={faQuestionCircle} height='20' className='me-3' />
}

const Header = ({ content }: { content: string }) => {
  return (
    <div className='d-flex align-items-center'>
      <Icon /> <span>{content}</span>
    </div>
  )
}
export const QandA = () => {
  return (
    <>
      <div className='text-center mb-5'>
        <h3>よくある質問</h3>
      </div>
      <Accordion>
        <Accordion.Item eventKey='0'>
          <Accordion.Header>
            <Header content='活動場所は？' />
          </Accordion.Header>
          <Accordion.Body>千葉大学構内、近辺、またはオンライン上。</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='1'>
          <Accordion.Header>
            <Header content='人数は?' />
          </Accordion.Header>
          <Accordion.Body>50名程度(2022年5月末現在)</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='2'>
          <Accordion.Header>
            <Header content='多い学部は?' />
          </Accordion.Header>
          <Accordion.Body>法政経学部、工学部がとくに多いです!</Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  )
}
