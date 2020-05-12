import React from 'react';
import { AdConsumer } from '../context/context';
import '../scss/list/Pagination.scss';

export default function Pagination() {
  return (
    <AdConsumer>
      {value => {
        const { filteredAds, prevNext, pagination } = value;
        const test = pagination(filteredAds);
        const numOfPages = Math.ceil(filteredAds.length / 10);
        let numbs = [];
        for (var i = 1; i <= numOfPages; i++) {
          numbs.push(i);
        }
        numbs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; //delete
        const currentPage = prevNext.singlePage;
        const a = currentPage - 3;
        const b = currentPage + 3;

        return (
          <div className="prevNext">
            <div className="prevNext__prev">
              {' '}
              {prevNext.singlePage > 0 && (
                <button
                  name="prev"
                  onClick={e => pagination(filteredAds, e.target.name)}
                  className={
                    prevNext.activePrev ? 'prevNext__btn' : 'invisible'
                  }
                >
                  Nazaj
                </button>
              )}
            </div>

            <div className="prevNext__pages">
              <div>
                {numbs.length <= 10
                  ? numbs.map((item, index) => (
                      <p
                        key={index}
                        className={`${item === prevNext.singlePage + 1 &&
                          'prevNext__pages--current'}
                          `}
                      >
                        {item}
                      </p>
                    ))
                  : numbs.slice(a < 0 ? a === 0 : a, b).map((item, index) => (
                      <p
                        key={index}
                        className={`${item === prevNext.singlePage + 1 &&
                          'prevNext__pages--current'} 
                            `}
                      >
                        {item}
                      </p>
                    ))}
              </div>
            </div>

            <div className="prevNext__next">
              {test.length >= 10 && filteredAds.length > 10 && (
                <button
                  name="next"
                  onClick={e => pagination(filteredAds, e.target.name)}
                  className={
                    prevNext.activeNext ? 'prevNext__btn' : 'invisible'
                  }
                >
                  Naprej
                </button>
              )}
            </div>
          </div>
        );
      }}
    </AdConsumer>
  );
}
