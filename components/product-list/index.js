import React, { useContext } from "react";
import SelectTools from "../../views/ui/product-list/SelectBody";
import Header from "../../views/ui/product-list/Header";
import CardBody from "../../views/ui/product-list/CardBody";
import ElBody from "../../views/ui/product-list/ElBody";
// import Picker from "./ui/ItemInfo/Picker";
import Times from "../lib/calender/Times";
// import Amount from "./ui/ItemInfo/Amount";
import Overlay from "../../views/ui/common/Overlay";
import Container from "../../views/ui/product-list/Container";
import Add from "../lib/calender/Button";
import ProductListSetting from "../../views/structure/ProductList";
import Units from "../lib/calender/Units";
import Picker from "../lib/calender/Picker";
import Amount from "../lib/calender/Amount";
import { useCalender } from "../../store/hooks/calender.hook";

const ProductList = () => {
  let { tools, date ,time , amount , unit , AddRow } = useContext(ProductListSetting);
  const [ calender , ] = useCalender();
  let { loading , selected: { item } } = calender;
  return (
    <>
      <Container>
        <Overlay>
          <Header/>
          <CardBody>
            <SelectTools props={tools} width={12} />
            {
              (!loading && Object.keys(item).length > 0) && (
                <>
				  <ElBody width={12}>
					<Picker props={date} />
				  </ElBody>
                  <ElBody width={12}>
                    <Units props={unit} />
                  </ElBody>
                  <ElBody width={12}>
                    <Times props={time} />
                  </ElBody>
                  <ElBody width={12}>
                    <Amount props={amount} />
                  </ElBody>
                </>
              )
            }

          </CardBody>
          <ElBody width={12}>
            <Add props={AddRow}/>
          </ElBody>
        </Overlay>
      </Container>
    </>
  );
};

export default ProductList;
