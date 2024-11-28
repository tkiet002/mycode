import React , {useContext,  useEffect,  useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import {AuthContext} from "../helpers/AuthContext";


const style = {
  position: 'absolute',
  top: '25%',
  left: '25%',
  transform: 'translate(-25%, -25%)',
  width: 1500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function AddNewQuestion() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    
  };
  let {lesson_id} = useParams();
  let {userid} = useParams();
  let {authState} = useContext(AuthContext);
  let {setAuthState} = useContext(AuthContext);
  var navigate = useNavigate();
  let params = {
    headers:{
      accessToken: localStorage.getItem("accessToken")
    }
  }
  const initialValue = {
    question_text: "",
    created_by: userid,
    lesson_id: lesson_id,
    explaination: "",
    optA: "",
    optB: "",
    optC: "",
    optD: "",
    OptAIsRight: false,
    OptBIsRight: false,
    OptCIsRight: false,
    OptDIsRight: false,
  };

  const onSubmit = (data) => {
    axios.post("http://localhost:3001/question", data).then((response) => {
      console.log("Success Added to Database!");
    });
    
    handleClose();
    navigate(`/editLesson/${lesson_id}/byuser/${userid}`)

  };

  const handleDelete = (id) =>{
    axios.delete(`http://localhost:3001/lesson/api/delete/${lesson_id}`,{headers: {
      accessToken: localStorage.getItem("accessToken")
    }}).then(()=>{
      console.log("Successfully");
      navigate(`/editLesson/byuser/${userid}/`)
    })
  }

  const validateSchema = Yup.object().shape({
    question_text: Yup.string().required(" Xin đừng để trống"),
    // created_by: Yup.number().required(" Xin đừng để trống"),
    // explaination: Yup.string().required(" Xin đừng để trống"),
    optA: Yup.string().required(" Xin đừng để trống"),
    optB: Yup.string().required(" Xin đừng để trống"),
    optC: Yup.string().required(" Xin đừng để trống"),
    optD: Yup.string().required(" Xin đừng để trống"),
  });

  
  useEffect(() =>{
    axios.post("http://localhost:3001/auth/getAuth/", params).then((response) => {
      
      if (response.data.error) {
        setAuthState({ username: "", id: 0, status: false });
        
      } else {
        setAuthState({
          username: response.data.username,
          id: response.data.id,
          status: true,
        });
        
      }
    });
  },[])

  return (
    <div>
      <div className="p-4 border border-black w-fit fixed">
        <Button onClick={handleOpen}>Thêm Câu Hỏi</Button>
        
      </div>
      
      
      {parseInt(authState.id)=== parseInt(userid) ? (<>
        <div className="p-4 border border-black w-fit mt-20 fixed">
          <Button onClick={() => handleDelete(lesson_id)}>Xóa bài học này?</Button>
        </div>
        
      </>) : (<>Hello False</>)}
        
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Formik
            initialValues={initialValue}
            onSubmit={onSubmit}
            validationSchema={validateSchema}
          >
            <Form className="grid grid-cols-2 w-[1050px]">
              <div className="mt-4">
                <label htmlFor="question_text">Câu hỏi</label>
                <ErrorMessage name="question_text" component="span" />
              </div>
              <div className="mt-4">
                <Field
                  autoComplete="off"
                  type="text"
                  id="question_text"
                  name="question_text"
                  className="border-black border rounded-lg p-2 w-[350px]"
                  placeholder="Câu hỏi"
                ></Field>
              </div>
              {/* <div className="mt-4">
                <label htmlFor="created_by">Được tạo bởi</label>
                <ErrorMessage name="created_by" component="span" />
              </div>
              <Field
                autoComplete="off"
                type="number"
                id="created_by"
                name="created_by"
                className="border-black border rounded-lg p-2 mt-4 w-[350px]"
                placeholder="Tạo bởi"
              ></Field> */}

              <div className="mt-4">
                <label htmlFor="optA">Câu A</label>
                <ErrorMessage name="optA" component="span" />
              </div>
              <div className="mt-4 w-[750px]">
                <Field
                  autoComplete="off"
                  type="text"
                  id="optA"
                  name="optA"
                  className="border-black border rounded-lg p-2 "
                  placeholder="Câu A"
                ></Field>
               <label htmlFor="OptAIsRight">Là đáp án chính xác?</label>
                <Field
                  type="checkbox"
                  name="OptAIsRight"
                  id="OptAIsRight"
                ></Field>
                
              </div>
              <div className="mt-4">
                <label htmlFor="optB">Câu B</label>
                <ErrorMessage name="optB" component="span" />
              </div>
              <div className="mt-4">
                <Field
                  type="text"
                  id="optB"
                  name="optB"
                  className="border-black border rounded-lg p-2"
                  placeholder="Câu B"
                ></Field>
                 <label htmlFor="OptBIsRight">Là đáp án chính xác?</label>
                <Field
                  type="checkbox"
                  name="OptBIsRight"
                  id="OptBIsRight"
                ></Field>
              </div>
              <div className="mt-4">
                <label htmlFor="optC">Câu C</label>
                <ErrorMessage name="optC" component="span" />
              </div>
              <div className="mt-4">
                <Field
                  type="text"
                  id="optC"
                  name="optC"
                  className="border-black border rounded-lg p-2 "
                  placeholder="Câu C"
                ></Field>
                <label htmlFor="OptCIsRight">Là đáp án chính xác?</label>
                <Field
                  type="checkbox"
                  name="OptCIsRight"
                  id="OptCIsRight"
                ></Field>
              </div>
              <div className="mt-4">
                <label htmlFor="optD">Câu D</label>
                <ErrorMessage name="optD" component="span" />
              </div>
              <div className="mt-4">
                <Field
                  type="text"
                  id="optD"
                  name="optD"
                  className="border-black border rounded-lg p-2 "
                  placeholder="Câu D"
                ></Field>
                <label htmlFor="OptDIsRight">Là đáp án chính xác?</label>
                <Field
                  type="checkbox"
                  name="OptDIsRight"
                  id="OptDIsRight"
                ></Field>
                
              </div>
              <button
                type="submit"
                className="border-black border rounded-lg p-2 mt-4 "
                
                id="submitButton"
              >
                Thêm câu hỏi
              </button>
            </Form>
          </Formik>
        </Box>
      </Modal>
    </div>
  );
}
