import { Quest, QuestDiv, Arrow, Answer } from "../styled/Container.Styled";
import { arrowDown } from "../images/images";
import { useState } from "react";

export default function QA() {
  const QAS = [
    {
      question: "How many team members can I invite?",
      answer:
        "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
    },
    {
      question: "What is the maximum file upload size?",
      answer:
        "No more than 2GB. All files in your account must fit your allotted storage space.",
    },
    {
      question: "How do I reset my password?",
      answer:
        "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.",
    },
    {
      question: "Can I cancel my subscription?",
      answer:
        "Yes! Send us a message and we’ll process your request no questions asked.",
    },
    {
      question: "Do you provide additional support?",
      answer:
        "Chat and email support is available 24/7. Phone lines are open during normal business hours.",
    },
  ];

  const [isActiveCard, setisActiveCard] = useState(null);

  return (
    <div>
      {QAS.map((item, index) => (
        <div>
          <QuestDiv
            onClick={() => {
              if (isActiveCard === index) {
                setisActiveCard(null);
              } else {
                setisActiveCard(index);
              }
            }}
          >
            <Quest
              cl={isActiveCard === index ? "#1E1F36" : "#4B4C5F"}
              weight={isActiveCard === index ? "700" : "400"}
            >
              {item.question}
            </Quest>
            <Arrow
              src={arrowDown}
              rotate={isActiveCard === index ? "rotate(180deg)" : ""}
            />
          </QuestDiv>
          {isActiveCard === index ? <Answer>{item.answer}</Answer> : null}
          <hr />
        </div>
      ))}
    </div>
  );
}
