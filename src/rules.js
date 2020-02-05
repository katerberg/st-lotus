import React from 'react';

function Rules() {
  return (
    <div id="rules">
        <h1>{'Rules'}</h1>
        <p>{'Rotisserie Draft, a structure borrowed from fantasy baseball, is one of the most skill-intensive and interesting ways to draft in Magic: the Gathering. Instead of opening booster packs, you take some defined group of cards, like a full set of a particular expansion or a cube, and draft those! In our Vintage Rotisserie Drafts, which we call “VRDs”, we draft from a pretty large group of cards - every card that’s legal to play in Vintage!'}</p>
        <p>{'Before the draft starts, we have to determine the pick order. With eight players, there are eight spots to choose from. We could determine the pick order at random, but we like adding an extra layer of strategy (and, let’s face it, complication) by randomly ordering the players and allowing them, in that order, to choose their spot in the draft.'}</p>
        <p>{'But why would anyone choose a spot other than the earliest one available? Well, once we get through the draft order, with each player in succession choosing one card, we reverse the draft order and repeat the process. That means whoever picked first during the first round picks last during the second round! You might know this as a “snake draft”. Therefore, there’s some value to be had in the eighth pick - you might get the last pick in the first round, but you get the the first pick in the second round, and those two picks in a row can have a lot of value.'}</p>
        <p>{'Speaking of picks, once a player picks a particular card, no one else can pick the same one. If someone else picks the card you’re planning to take next, you’d better find another plan.'}</p>
        <p>{'Once we’ve settled on the draft order, the draft begins! Just like in a real draft, each player picks 45 cards, but because these picks are made one at a time, it tends to take a while - a couple hours, in fact. We take breaks every 15 picks so players can get up, grab a drink, and so on.'}</p>
        <p>{'After all the players have drafted their 45 cards, they build their 40-card decks, adding as many basic lands (Plains, Island, Swamp, Mountain, and Forest only - if you want Snow lands or Wastes, you have to draft them!) as they want, just like in any draft. This event doesn’t have continuous construction - maindecks and sideboards are locked in from Round 1 through the end of the event, so building your deck right to start the day is a must.'}</p>
        <p>{'The event is played out in round-robin style, with each player battling each other player over the course of the day for a total of seven matches each. Once everyone has played all of their matches, we check the standings to see where everyone placed! Standings are by match record only - any ties are broken by one-game playoffs.'}</p>
        <p>{'The standings matter for pride, of course, but also for prizes and invitations! In order to enter the St. Lotus VRD, you have to bring a food or drink item worth $50 or more as your buy-in. In the past, this has led players to bring steaks, giant chunks of fancy cheese, and high-end adult beverages. After the dust settles, the top 4 players draft the prizes, with players getting picks in order as follows:'}</p>
        <ul>
          <li>{'1st place: Picks 1, 6, 7, and 8'}</li>
          <li>{'2nd Place: Picks 2 and 5'}</li>
          <li>{'3rd Place: Pick 3'}</li>
          <li>{'4th Place: Pick 4'}</li>
        </ul>
        <p>
        {'Sounds fun, right? If you want to catch all the action, follow us on '}<a href="https://www.twitch.tv/stlvrd">{'Twitch'}</a>
        {', '}
        <a href="https://www.twitter.com/stlvrd">{'Twitter'}</a>
        {', and '}
        <a href="https://www.youtube.com/channel/UCpwS9X2A-5pmo1txhyD7eoA">{'Youtube'}</a>
        {' so you don’t miss a single moment!'}
        </p>
    </div>
  );
}

export default Rules;
