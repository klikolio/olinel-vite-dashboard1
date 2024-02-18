import 'typeahead.js'
import '@modules/typeahead/styles/typeahead.scss'

import $ from 'jquery'
import Bloodhound from 'typeahead.js/dist/bloodhound'
import Handlebars from 'handlebars'
import {
  TYPEAHEAD_DATA,
  typeaheadManualMatcher,
} from '@app/utilities/typeahead-helper'

// Initialize typeahead
$('#typeahead-1').typeahead(
  {
    hint: true,
    highlight: true,
    minLength: 1,
  },
  {
    name: 'states',
    source: typeaheadManualMatcher(TYPEAHEAD_DATA),
  },
)

// Initialize suggestion engine
const states = new Bloodhound({
  datumTokenizer: Bloodhound.tokenizers.whitespace,
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  local: TYPEAHEAD_DATA, // Insert data from internal array
})

// Initialize typeahead
$('#typeahead-2').typeahead(
  {
    hint: true,
    highlight: true,
    minLength: 1,
  },
  {
    name: 'states',
    source: states,
  },
)

// Initialize suggestion engine
const bestPictures = new Bloodhound({
  datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  prefetch: 'https://twitter.github.io/typeahead.js/data/films/post_1960.json', // Insert data from API
})

// Initialize typeahead
$('#typeahead-3').typeahead(
  {
    minLength: 1,
  },
  {
    name: 'best-pictures',
    display: 'value',
    source: bestPictures,
  },
)

// Initialize typeahead
$('#typeahead-4').typeahead(
  {
    minLength: 1,
  },
  {
    name: 'best-pictures',
    display: 'value',
    source: bestPictures,
    templates: {
      notFound: '<div class="tt-empty-message">Not found</div>',
      suggestion: Handlebars.compile(`
				<div class="tt-menu-item">
					<div class="tt-menu-content">
						<h4 class="tt-menu-title">{{value}}</h4>
						<span class="tt-menu-subtitle">{{year}}</span>
					</div>
				</div>
			`),
    },
  },
)

// Initialize suggestion engine
const nflTeams = new Bloodhound({
  datumTokenizer: Bloodhound.tokenizers.obj.whitespace('team'),
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  prefetch: 'https://twitter.github.io/typeahead.js/data/nfl.json', // Insert data from API
})

// Initialize typeahead
$('#typeahead-5').typeahead(
  {
    minLength: 0,
    highlight: true,
  },
  {
    name: 'nfl-teams',
    display: 'team',
    source: (query: string, sync: (result: any[]) => void) => {
      if (query === '') {
        sync([
          { team: 'Detroit Lions' },
          { team: 'Green Bay Packers' },
          { team: 'Chicago Bears' },
        ])
      } else {
        nflTeams.search(query, sync)
      }
    },
  },
)

// Initialize suggestion engine
const nbaTeams = new Bloodhound({
  datumTokenizer: Bloodhound.tokenizers.obj.whitespace('team'),
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  prefetch: 'https://twitter.github.io/typeahead.js/data/nba.json', // Insert data from API
})

// Initialize suggestion engine
const nhlTeams = new Bloodhound({
  datumTokenizer: Bloodhound.tokenizers.obj.whitespace('team'),
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  prefetch: 'https://twitter.github.io/typeahead.js/data/nhl.json', // Insert data from API
})

// Initialize typeahead
$('#typeahead-6').typeahead(
  {
    highlight: true,
  },
  {
    name: 'nba-teams',
    display: 'team',
    source: nbaTeams,

    // Custom templates
    templates: {
      header: '<h3 class="tt-header">NBA Teams</h3>',
    },
  },
  {
    name: 'nhl-teams',
    display: 'team',
    source: nhlTeams,

    // Custom templates
    templates: {
      header: '<h3 class="tt-header">NHL Teams</h3>',
    },
  },
)
