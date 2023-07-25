import axios from "axios";
import MockAdapter from "axios-mock-adapter";

import { Category } from "@/interfaces";
import { fetchCategories } from "@/api";

// Set mock adapter on the default instance
var mock = new MockAdapter(axios);

const mockCategories: Category[] = [
  {
    id: 1,
    name: "Electronics",
  },
  {
    id: 2,
    name: "Books",
  },
];

beforeEach(() => {
  mock.reset();

  mock.onGet().reply(200, mockCategories);
});

test("fetches categories from the API", async () => {
  const data = await fetchCategories();
  expect(data).toEqual(mockCategories);
});
