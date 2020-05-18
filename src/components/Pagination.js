import React from 'react';
import { AdConsumer } from '../context/context';
import '../scss/list/Pagination.scss';

export default function Pagination() {
  return (
    <AdConsumer>
      {(value) => {
        const { filteredAds, prevNext, pagination } = value;
        const test = pagination(filteredAds);
        const numOfPages = Math.ceil(filteredAds.length / 18);
        let numbs = [];
        for (var i = 1; i <= numOfPages; i++) {
          numbs.push(i);
        }
        const currentPage = prevNext.singlePage;
        const a =
          currentPage <= 3
            ? 0
            : currentPage + 4 >= numbs[numbs.length - 1]
            ? numbs.length - 7
            : currentPage - 3;
        const b = currentPage <= 3 ? 7 : currentPage + 4;
        let numbsArray =
          numbs.length <= 7
            ? numbs
            : numbs.length > 7 &&
              currentPage >= 4 &&
              currentPage + 4 < numbs[numbs.length - 1]
            ? ['...', ...numbs.slice(a, b), '...']
            : numbs.length > 7 && currentPage + 4 >= numbs[numbs.length - 1]
            ? ['...', ...numbs.slice(a, b)]
            : [...numbs.slice(a, b), '...'];

        return (
          <div className="prevNext">
            <div className="prevNext__prev">
              {prevNext.singlePage > 0 && (
                <button
                  name="prev"
                  onClick={(e) => pagination(filteredAds, e.target.name)}
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
                {numbs.length <= 7
                  ? numbsArray.map((item, index) => (
                      <p
                        key={index}
                        className={
                          item === prevNext.singlePage + 1
                            ? 'prevNext__pages--current'
                            : 'emptyClass'
                        }
                        onClick={(e) =>
                          pagination(filteredAds, 'goToPageNum', e)
                        }
                        data-pagenum={item}
                      >
                        {item}
                      </p>
                    ))
                  : numbsArray.map((item, index) => (
                      <p
                        key={index}
                        className={
                          item === prevNext.singlePage + 1
                            ? 'prevNext__pages--current'
                            : 'emptyClass'
                        }
                        data-pagenum={item}
                        onClick={(e) =>
                          pagination(filteredAds, 'goToPageNum', e)
                        }
                      >
                        {item}
                      </p>
                    ))}
              </div>
            </div>

            <div className="prevNext__next">
              {test.length >= 18 && filteredAds.length > 18 && (
                <button
                  name="next"
                  onClick={(e) => pagination(filteredAds, e.target.name)}
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
