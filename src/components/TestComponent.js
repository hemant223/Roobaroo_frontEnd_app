// import React, { Component, useState, useEffect, useRef } from "react";
// import {
//   Container,
//   Header,
//   Content,
//   H1,
//   Text,
//   Form,
//   Item,
//   Input,
//   DatePicker,
// } from "native-base";

// export default function createOrder() {
//   const [name, setName] = useState("");
//   const [amount, setAmount] = useState("");
//   const [count, setCount] = useState("");
//   const [price, setPrice] = useState("");
//   const [commission, setCommission] = useState("");
//   const [date, setDate] = useState(new Date());
//   // used to regulate when calculations are made
//   const [focusedInput, setFocus] = useState(null);
//   console.log(date);

//   // run an effect when price, count, or amount changes
//   useEffect(() => {
//     // if price and count exist and user isnt changing amount, calculate amount
//     if (price && count && focusedInput !== "amount") {
//       setAmount((parseFloat(price) * parseFloat(count)).toString());
//     }
//     // if price and count exist and user isnt changing count, calculate count
//     else if (price && amount && focusedInput !== "count") {
//       setCount((parseFloat(amount) / parseFloat(price)).toString());
//     }
//   }, [price, count, amount]);
//   // when amount changes, update commission and total
//   useEffect(() => {
//     if (isNaN(parseFloat(amount))) setCommission("");
//     if (amount) setCommission((parseFloat(amount) * 0.002).toString());
//   }, [amount]);

//   return (
//     <Container>
//       <Header />
//       <Content>
//         <Form>
//           <Item>
//             <Input
//               placeholder="coin name"
//               onChangeText={(text) => setName(text)}
//             />
//           </Item>
//           <Item>
//             <Input
//               placeholder="number of coins"
//               onChangeText={(text) => setCount(text)}
//               keyboardType="decimal-pad"
//               value={count}
//               onFocus={() => setFocus("count")}
//             />
//           </Item>
//           <Item>
//             <Input
//               placeholder="Amount Invested"
//               onChangeText={(text) => setAmount(text)}
//               keyboardType="decimal-pad"
//               value={amount}
//               onFocus={() => setFocus("amount")}
//             />
//           </Item>

//           <Item>
//             <Input
//               placeholder="coin price"
//               onChangeText={(text) => setPrice(text)}
//               keyboardType="decimal-pad"
//               value={price}
//               onFocus={() => setFocus("price")}
//             />
//           </Item>
//           <Item last>
//             <DatePicker
//               style={{ width: 200 }}
//               date={date}
//               mode="date"
//               placeholder="select date"
//               format="YYYY-MM-DD"
//               minDate="2016-05-01"
//               maxDate="2017-11-01"
//               confirmBtnText="Confirm"
//               cancelBtnText="Cancel"
//               onDateChange={(date) => setDate(date)}
//             />
//           </Item>
//         </Form>
//         <Text>Commission: {commission}</Text>
//         <Text>
//           Total Amount:{" "}
//           {(parseFloat(commission) + parseFloat(amount)).toString()}
//         </Text>
//       </Content>
//     </Container>
//   );
// }