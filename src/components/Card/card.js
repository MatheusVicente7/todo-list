import React, { useState, useContext, memo } from "react";

//Minor Components
import {
  Container,
  Head,
  Title,
  MenuIcon,
  Body,
  Text,
  Foot,
  TagContent,
  Tag,
} from "./styles";

//Context
import { dataContext } from "../../context/dataContext.js";

//Components
import { Checkbox, Col, Dropdown, Menu } from "antd";
import ModalEdit from "../Modal/modalEdit";

const Card = ({ dataProps, index }) => {
  const { todoList, setTodoList } = useContext(dataContext);
  const [showModal, setShowModal] = useState(false);
  function deleteCard(indexProps) {
    var newArr = todoList.slice();
    newArr.splice(indexProps, 1);
    setTodoList(newArr);
  }
  function handleDoneClick() {
    var newArr = todoList.slice();
    newArr[index].done = !newArr[index].done;
    setTodoList(newArr);
  }

  const menuOverlay = () => {
    return (
      <Menu>
        <Menu.Item onClick={() => setShowModal(true)}>Edit</Menu.Item>
        <Menu.Item onClick={() => deleteCard(index)}>Delete</Menu.Item>
      </Menu>
    );
  };

  return (
    <>
      <Col sm={24} md={12} lg={12}>
        <Container>
          <Head>
            <Title isDone={dataProps.done}>{dataProps.title}</Title>,
            <Dropdown overlay={menuOverlay} trigger={["click"]}>
              <MenuIcon />
            </Dropdown>
          </Head>
          <Body>
            <Text isDone={dataProps.done}>{dataProps.text}</Text>
          </Body>
          <Foot>
            <TagContent>
              {dataProps.tags.map((data, index) => (
                <Tag key={index} color={data.color} />
              ))}
            </TagContent>
            <Checkbox
              checked={dataProps.done}
              onChange={() => handleDoneClick()}
            >
              Done
            </Checkbox>
          </Foot>
        </Container>
      </Col>
      <ModalEdit
        hideModal={() => setShowModal(false)}
        showModal={showModal}
        defaultData={{
          content: dataProps,
          tagList: dataProps.tags,
        }}
      />
    </>
  );
};

export default memo(Card);