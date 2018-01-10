// @flow

import moxios from 'moxios';
import { setSearchTerm, addApiData, getAPIDetails } from "../actionCreators";

const strangerThings = {
  "title": "Atlanta",
  "year": "2008–2013",
  "description": "Two cousins, with different views on art versus commerce, on their way up through the Atlanta rap scene; \"Earnest 'Earn' Marks,\" an ambitious college drop-out and his estranged cousin, who suddenly becomes a star.",
  "poster": "a.jpg",
  "imdbID": "tt4288182",
  "trailer": "MpEdJ-mmTlY",
  "rating": "8.6"
};

test('setSearchTerm', () => {
  expect(setSearchTerm('New York')).toMatchSnapshot();
});

test('addAPIData', () => {
  expect(
    addApiData(strangerThings)
  ).toMatchSnapshot();
});

test('getAPIDetails', (done: Function) => {
  const dispatchMock = jest.fn();
  moxios.withMock(() => {
    const thunk = getAPIDetails(strangerThings.imdbID);
    thunk(dispatchMock);
    moxios.wait(() => {
      const request = moxios.request.mostRecent();
      request.respondWith({
        status: 200,
        response: strangerThings
      }).then(() => {
        expect(request.url).toEqual(`http://localhost:3000/${strangerThings.imdbID}`);
        expect(dispatchMock).toBeCalledWith(addApiData(strangerThings));
      })
    });
    done();
  })
});
