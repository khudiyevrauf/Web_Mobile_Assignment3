import { instance } from ".";

const createMessage = async ({ id, name, email, subject, message }) => {
  try {
    const dataBody = {
      id: id,
      name: name,
      email: email,
      subject: subject,
      message: message,
    };
    const { data } = await instance.post(`messages`, dataBody, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export { createMessage };
