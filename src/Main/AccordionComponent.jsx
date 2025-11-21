import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { red } from '@mui/material/colors';


export default function AccordionComponent() {
  return (
        <div className='mt-5 p-2'>
          <Accordion  defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          
        >
          <Typography  component="span"><p className='font-vazir'>مهارت‌ها</p></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component="div">
            <div className='justify-center items-center gap-x-4 grid grid-cols-2 mr-6 font-vazir'>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>ReactRouter</li>
              <li>ContextApi</li>
              <li>Tailwind</li>
              <li>Bootstrap</li>
              <li>طراحی سایت ریسپانسیو</li>
              <li>Seo</li>

            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography  component="span" ><p className='font-vazir'>تحصیلات</p></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component="div">
            <p className='font-vazir'>مهندسی نرم افزار کامپیوتر | دانشگاه خوراسگان اصفهان
            </p>
          </Typography>
        </AccordionDetails>
      </Accordion>
            <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography  component="span"><p className='font-vazir'>سوابق کاری</p></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component="div">
            <p className='font-vazir'>شرکت آریا کامین - فولادمبارکه| 1395–1400
            </p>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}
