import { instance } from ".";

const fetchCards = async ({ sort }) => {
  try {
    const { data } = await instance.get(`cards?${sort}`);
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

const createCard = async ({
  text,
  question,
  answer,
  description,
  dateTime,
  status,
}) => {
  try {
    const dataBody = {
      text: text,
      question: question,
      answer: answer,
      description: description,
      dateTime: dateTime,
      status: status,
    };
    await instance.post(`cards`, dataBody, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    // const { data } = await instance.get(`cards`);
    // return data;
  } catch (error) {
    throw new Error(error);
  }
};

const updateCard = async ({
  id,
  text,
  question,
  answer,
  description,
  dateTime,
}) => {
  try {
    const dataBody = {
      id: id,
      text: text,
      question: question,
      answer: answer,
      description: description,
      dateTime: dateTime,
    };
    await instance.patch(`cards/${id}`, dataBody, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    // const { data } = await instance.get(`cards`);
    // return data;
  } catch (error) {
    throw new Error(error);
  }
};

const updateStatusOfCard = async ({ id, status }) => {
  try {
    const dataBody = {
      status: status,
    };
    await instance.patch(`cards/${id}`, dataBody, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    throw new Error(error);
  }
};

const removeCard = async ({ id }) => {
  try {
    await instance.delete(`cards/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const { data } = await instance.get(`cards`);
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export { fetchCards, createCard, updateCard, removeCard, updateStatusOfCard };
