export default {
    kind: 'customsearch#search',
    url: {
      type: 'application/json',
      template: 'https://www.googleapis.com/customsearch/v1?q={searchTerms}&num={count?}&start={startIndex?}&lr={language?}&safe={safe?}&cx={cx?}&sort={sort?}&filter={filter?}&gl={gl?}&cr={cr?}&googlehost={googleHost?}&c2coff={disableCnTwTranslation?}&hq={hq?}&hl={hl?}&siteSearch={siteSearch?}&siteSearchFilter={siteSearchFilter?}&exactTerms={exactTerms?}&excludeTerms={excludeTerms?}&linkSite={linkSite?}&orTerms={orTerms?}&relatedSite={relatedSite?}&dateRestrict={dateRestrict?}&lowRange={lowRange?}&highRange={highRange?}&searchType={searchType}&fileType={fileType?}&rights={rights?}&imgSize={imgSize?}&imgType={imgType?}&imgColorType={imgColorType?}&imgDominantColor={imgDominantColor?}&alt=json'
    },
    queries: {
      request: [
        {
          title: 'Google Custom Search - react',
          totalResults: '470000000',
          searchTerms: 'react',
          count: 10,
          startIndex: 1,
          inputEncoding: 'utf8',
          outputEncoding: 'utf8',
          safe: 'off',
          cx: '41b20711d18c1ff23'
        }
      ],
      nextPage: [
        {
          title: 'Google Custom Search - react',
          totalResults: '470000000',
          searchTerms: 'react',
          count: 10,
          startIndex: 11,
          inputEncoding: 'utf8',
          outputEncoding: 'utf8',
          safe: 'off',
          cx: '41b20711d18c1ff23'
        }
      ]
    },
    context: {
      title: 'Google'
    },
    searchInformation: {
      searchTime: 0.552704,
      formattedSearchTime: '0.55',
      totalResults: '470000000',
      formattedTotalResults: '470,000,000'
    },
    items: [
      {
        kind: 'customsearch#result',
        title: 'React – A JavaScript library for building user interfaces',
        htmlTitle: '<b>React</b> – A JavaScript library for building user interfaces',
        link: 'https://reactjs.org/',
        displayLink: 'reactjs.org',
        snippet: 'Declarative. React makes it painless to create interactive UIs. Design simple \nviews for each state in your application, and React will efficiently update and \nrender ...',
        htmlSnippet: 'Declarative. <b>React</b> makes it painless to create interactive UIs. Design simple <br>\nviews for each state in your application, and <b>React</b> will efficiently update and <br>\nrender&nbsp;...',
        cacheId: 'dzSQNmg7y30J',
        formattedUrl: 'https://reactjs.org/',
        htmlFormattedUrl: 'https://<b>react</b>js.org/',
        pagemap: {
          cse_thumbnail: [
            {
              src: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRfoO6h2pHfrElGwudOq05MGR-ESjebbBJaWuKIJNz6Ut3_SBrPloUxWYM',
              width: '310',
              height: '163'
            }
          ],
          metatags: [
            {
              "og:image": 'https://reactjs.org/logo-og.png',
              "og:type": 'website',
              "fb:app_id": '623268441017527',
              "theme-color": '#20232a',
              "viewport": 'width=device-width, initial-scale=1.0',
              "apple-mobile-web-app-capable": 'yes',
              "apple-mobile-web-app-title": 'React',
              "og:title": 'React – A JavaScript library for building user interfaces',
              "og:url": 'https://reactjs.org/',
              "og:description": 'A JavaScript library for building user interfaces'
            }
          ],
        }
      },
    ]
  }