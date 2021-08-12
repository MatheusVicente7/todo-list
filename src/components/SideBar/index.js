import React, { useState, useContext } from "react";

//Scripts
import { dataContext } from "../../context/dataContext";

//Components
import ModalTag from "../Modal";
// import { Checkbox } from "antd";

//Minor components
import { Container, Head, Body, Tag, Foot, AddIcon } from "./styles";

const SideBar = (props) => {
  const { tagList } = useContext(dataContext);
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Container>
        <div>
          <Head>
            <h3>todo</h3>
          </Head>
          <Body>
            {tagList?.length > 0 ? (
              <>
                {tagList.map((data, index) => (
                  <Tag color={data.color} key={index}>
                    {data.text}
                  </Tag>
                ))}
              </>
            ) : (
              <h3>You dont have any tags yet</h3>
            )}
          </Body>
        </div>
        <Foot>
          <AddIcon onClick={() => setShowModal(true)} />
          <span onClick={() => setShowModal(true)}>Add a new tag</span>
          {/* <Checkbox>Hide Done Tasks</Checkbox> */}
        </Foot>
      </Container>
      <ModalTag
        hideModal={() => setShowModal(false)}
        showModal={showModal}
        tagList={tagList}
        type="tag"
      />
    </>
  );
};

export default SideBar;
