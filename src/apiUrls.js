const PROTOCOL = "http";
const URL = "▣▣.▣▣▣.▣▣▣.▣▣▣";
const PORT = "▣▣▣▣";

const SERVER_URL = `${PROTOCOL}://${URL}:${PORT}/api`;

const API_URLS = {
  getUsers: `${SERVER_URL}/users/news/20`,
  countAll: `${SERVER_URL}/users/count-all`,
  sendUsers: `${SERVER_URL}/users`,
  sendInquires: `${SERVER_URL}/inquires`,
};

export default API_URLS;
