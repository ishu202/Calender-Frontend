import React, {useRef} from "react";
import Row from "../../views/ui/common/Row";
import Footer from "../../views/ui/common/Footer";
import Container from "../../views/ui/common/Container";
import Overlay from "../../views/ui/common/Overlay";
import Heading from "../../views/ui/item-page/HeadWrapper";
import Amount from "../lib/calender/AmountItem";
import Picker from "../lib/calender/Picker";
import CardBody from "../../views/ui/item-page/CardBody";
import Form from "../../views/ui/item-page/Form";
import RentButton from "../lib/calender/Button";
import InnerFormWrapper from "../../views/ui/item-page/InnerFormWrapper";
import Units from "../lib/calender/Units";
import Times from "../lib/calender/Times";
import ItemPageSetting from "../../views/structure/ItemPage";
import { useContext } from "react";
import Radio from "../../views/ui/common/Radio";
import {useCalender} from "../../store/hooks/calender.hook";
import {setDeliveryMethod} from "../../store/features/calender.slice";



const ItemPage = () => {
  let { date , time  , unit , amount, AddRow } = useContext(ItemPageSetting);
  let [ calender , dispatch ] = useCalender();
  let radioRef = useRef();
  let {loading , selected: { item , delivery_method } } = calender;

  return (
      <Container>
        <Overlay>
          <Heading />
          <CardBody>
            <Amount props={ amount } />
              <InnerFormWrapper>
                <Row>
                  <Units  props={unit} />
                </Row>
                <Row>
                  <Picker props={date} />
                </Row>
                <Row>
                  <Times props={time} />
                </Row>
				  {
					  (!loading) ? (
						  (item.deliverable.length) ? (
						  	<div className="mt-4">
								<hr className="mt-2 mb-2" />
							  <Row>
								<Radio
									ref={radioRef}
									label={"Select a pickup/delivery method"}
									name={"delivery_method"}
									options={item.deliverable}
									attributes={{
										onClick: (e) => {
											let radio = e.currentTarget.querySelector('input[type="radio"]');
											radio.checked = true;
											dispatch(setDeliveryMethod(radio.value))
										},
										value: delivery_method
									}}
								/>
							  </Row>
							</div>
						  ) : null
					  ) : null
				  }
              </InnerFormWrapper>
              <Footer>
                <RentButton props={AddRow} />
              </Footer>
          </CardBody>
        </Overlay>
      </Container>
  );
}

export default ItemPage;
