  import React from "react";
  import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
  import "react-vertical-timeline-component/style.min.css";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { faArrowRight, faPen } from "@fortawesome/free-solid-svg-icons";

  const TimelineComponent: React.FC = () => {
    const fetchDataFromDB = () => {
      // Simulação de dados do banco de dados
      return [
        {
          id: 1,
          date: "12 de janeiro de 2023 às 17:28",
          changeTitle: "Valor de 'nome' alterado",
          beforeChange: "CARMEN DANIELA DA ROSA",
          afterChange: "CARMEN DANIELA DA ROSA RECCO",
        },
        {
          id: 2,
          date: "15 de fevereiro de 2023 às 09:45",
          changeTitle: "Atualização de 'endereço'",
          beforeChange: "Rua ABC, 123",
          afterChange: "Avenida XYZ, 456",
        },
        {
          id: 3,
          date: "20 de março de 2023 às 14:12",
          changeTitle: "Modificação de 'email'",
          beforeChange: "johndoe@email.com",
          afterChange: "john.doe@email.com",
        },
        {
          id: 4,
          date: "5 de abril de 2023 às 21:03",
          changeTitle: "Ajuste de 'telefone'",
          beforeChange: "+123 456 789",
          afterChange: "+987 654 321",
        },
        {
          id: 5,
          date: "10 de maio de 2023 às 11:30",
          changeTitle: "Correção de 'data de nascimento'",
          beforeChange: "01/01/1990",
          afterChange: "15/05/1985",
        },
        {
          id: 6,
          date: "18 de junho de 2023 às 16:58",
          changeTitle: "Mudança de 'cargo'",
          beforeChange: "Analista de Marketing",
          afterChange: "Gerente de Marketing",
        },
        {
          id: 7,
          date: "25 de julho de 2023 às 08:22",
          changeTitle: "Atualização de 'departamento'",
          beforeChange: "RH",
          afterChange: "Finanças",
        },
      ];
    };

 
    const renderTimelineElements = () => {
      const timelineData = fetchDataFromDB();
  
      return timelineData.map((item) => (
        <VerticalTimelineElement
          key={item.id}
          contentStyle={{
            color: "#000",
            textAlign: "left",
            background: "#F0F0F0",
            borderRadius: "15px",
          }}
          contentArrowStyle={{ borderRight: "8px solid  #F0F0F0" }}
          date={item.date}
          iconStyle={{ background: "rgb(243, 159, 90)", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faPen} />}
        >
          <div className="">
            <h3 className="text-slate-500">{item.changeTitle}</h3>
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <h4 className="bg-slate-200 rounded-lg px-3 mb-2 md:mb-0">
                {item.beforeChange}
              </h4>
              {window.innerWidth >= 768 && (
                <FontAwesomeIcon icon={faArrowRight} className="mt-1 md:mt-0" />
              )}
              <h4 className="bg-slate-200 rounded-lg px-3">{item.afterChange}</h4>
            </div>
          </div>
        </VerticalTimelineElement>
      ));
    };
  
    return (
      <VerticalTimeline lineColor="orange" layout="1-column-left" animate={true}>
        {renderTimelineElements()}
      </VerticalTimeline>
    );
  };
  
  export default TimelineComponent;