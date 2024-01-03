import style from "./flashCards.module.css";
import FlashCard from "../../components/card/card";
import { useDispatch, useSelector } from "react-redux";
import { getCards } from "../../store/actions/cardThunk";
import { useEffect, useRef, useState } from "react";
import Modal from "../../components/modal/modal";

const FlashCards = () => {
  const dispatch = useDispatch();

  const [searchedCards, setSearchedCards] = useState();
  const searchRef = useRef();

  const { cards } = useSelector((state) => state.card);
  const [selectedCards, setSelectedCards] = useState([]);

  const handleSelectedCard = (cardId) => {
    setSelectedCards((prevSelected) => {
      if (prevSelected.includes(cardId)) {
        return prevSelected.filter((id) => id !== cardId);
      } else {
        return [...prevSelected, cardId];
      }
    });
  };

  const generateJSON = () => {
    const selectedCardData = cards.filter((card) =>
      selectedCards.includes(card.id)
    );

    const jsonData = selectedCardData.map((card) => ({
      id: card.id,
      text: card.text,
      question: card.question,
      answer: card.answer,
      description: card.description,
      status: card.status,
      dateTime: card.dateTime,
    }));

    return JSON.stringify(jsonData, null, 2);
  };

  const sendEmail = () => {
    const jsonContent = generateJSON();

    const mailtoLink = `mailto:?subject=FlashCards&body=${encodeURIComponent(
      jsonContent
    )}`;
    window.location.href = mailtoLink;
  };

  useEffect(() => {
    dispatch(getCards({ sort: "_sort=dateTime&_order=asc" }));
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [header, setHeader] = useState("Create");

  const handleOpenModal = (header) => {
    setHeader(header);
    setIsModalOpen(true);
  };

  const [updatedCard, setUpdatedCard] = useState();

  const handleSearch = (e) => {
    e.preventDefault();
    const searchText = searchRef.current.value;
    const res = cards.filter((card) => {
      if (
        card.text.includes(searchText) ||
        card.question.includes(searchText) ||
        card.answer.includes(searchText) ||
        card.description.includes(searchText)
      ) {
        return card;
      }
    });
    if (!searchText) {
      setSearchedCards();
    } else {
      setSearchedCards(res);
    }
    handleFilter(res);
  };

  const filterRef = useRef();

  const [filteredCards, setFilteredCards] = useState();

  const handleFilter = (searched) => {
    const res = searched
      ? searched.filter((card) => {
          if (card.status.includes(filterRef.current.value)) {
            return card;
          }
        })
      : cards.filter((card) => {
          if (card.status == filterRef.current.value) {
            return card;
          }
        });

    if (filterRef.current.value == "All") {
      if (searched) {
        setFilteredCards(searched);
      } else {
        setFilteredCards(cards);
      }
    } else {
      setFilteredCards(res);
    }
  };

  const sortRef = useRef();

  const handleSort = () => {
    dispatch(
      getCards({
        sort: `_sort=${sortRef.current.value.split("_")[0]}&_order=${
          sortRef.current.value.split("_")[1]
        }`,
      })
    );
  };

  return (
    <>
      <div className={style.cardPage}>
        <div className="topPart">
          <form className="searchPart" onSubmit={handleSearch}>
            <input type="search" placeholder="Search..." ref={searchRef} />
            <button type="submit">Search</button>
          </form>
          <select onChange={() => handleFilter(searchedCards)} ref={filterRef}>
            <option value="All">All</option>
            <option value="Learned">Learned</option>
            <option value="Want to Learn">Want to Learn</option>
            <option value="Noted">Noted</option>
          </select>
          <select onChange={handleSort} ref={sortRef}>
            <option value="dateTime_asc">By Time asc</option>
            <option value="dateTime_desc">By Time desc</option>
          </select>
          {selectedCards.length > 0 && (
            <button onClick={sendEmail}>Share</button>
          )}
          <button onClick={() => handleOpenModal("Create")}>Create Card</button>
        </div>
        <div className={style.allCards}>
          {searchedCards
            ? filteredCards?.map((card) => {
                return (
                  <FlashCard
                    key={card.id}
                    handleOpenModal={handleOpenModal}
                    setUpdatedCard={setUpdatedCard}
                    isSelected={selectedCards.includes(card.id)}
                    handleSelectedCard={handleSelectedCard}
                    {...card}
                  />
                );
              })
            : filteredCards
            ? filteredCards?.map((card) => {
                return (
                  <FlashCard
                    key={card.id}
                    handleOpenModal={handleOpenModal}
                    setUpdatedCard={setUpdatedCard}
                    isSelected={selectedCards.includes(card.id)}
                    handleSelectedCard={handleSelectedCard}
                    {...card}
                  />
                );
              })
            : cards?.map((card) => {
                return (
                  <FlashCard
                    key={card.id}
                    handleOpenModal={handleOpenModal}
                    setUpdatedCard={setUpdatedCard}
                    isSelected={selectedCards.includes(card.id)}
                    handleSelectedCard={handleSelectedCard}
                    {...card}
                  />
                );
              })}
        </div>
      </div>

      <Modal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        header={header}
        setUpdatedCard={setUpdatedCard}
        handleSort={handleSort}
        {...updatedCard}
      />
    </>
  );
};

export default FlashCards;
