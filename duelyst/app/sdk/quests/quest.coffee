GameStatus = require 'app/sdk/gameStatus'
GameType = require 'app/sdk/gameType'

class Quest

  id: null # integer generated by quest factory and used for lookup
  types: null # array of values from QuestType
  name: null # player visible name of quest
  goldReward: undefined # gold reward for completion of quest
  spiritOrbsReward: undefined # spirit orb count reward for completion of quest
  params: null # object of properties that get saved to firebase e.g. completion progress
  requiresStreak: undefined # if a quest requires a streak, all progress will reset if a game completes without making progress
  friendlyMatchesCount: undefined
  riftMatchesCount: undefined
  isReplaceable:true # can this quest type be replaced

  constructor: (@id,@name,typesIn,goldReward) ->
    @types = typesIn
    @params = {}
    @goldReward = goldReward
    @friendlyMatchesCount = false
    @riftMatchesCount = true

  # returns the amount of progress made in a given gameData, should always check if game is over
  # gameData - a parsed representation of serialized gamesession data
  progressForGameDataForPlayerId: (gameData,playerId) ->
    # Can only make progress in a completed game
    if gameData.status != GameStatus.over
      return 0

    # don't make progress if this game didn't count based on being friendly
    if gameData.gameType == GameType.Friendly and !@friendlyMatchesCount
      return 0

    # don't make progress if this game didn't count based on being rift mode
    if gameData.gameType == GameType.Rift and !@riftMatchesCount
      return 0

    return @_progressForGameDataForPlayerId(gameData,playerId)

  # Returns progress based on a passed in faction's stats (assumes this faction leveled)
  progressForProgressedFactionData: (progressedFactionData)->
    return 0

  # Returns progress for completing the passed in challenge id
  progressForChallengeId: (challengeId)->
    return 0

  # Subclasses should override this to return how much progress is made for completing a quest
  _progressForGameDataForPlayerId: (gameData,playerId) ->
    #override: calculate if this quest is satisfied by a game session for a player
    return 0

  # Subclasses should override this to return how much progress is made for completing a quest
  progressForQuestCompletion: (questData)->
    return 0

  getId:()->
    @id

  getName:()->
    @name

  getTypes:()->
    @types

  getDescription:()->
    return "N/A"

  getGoldReward:()->
    return @goldReward

  getSpiritOrbsReward:()->
    return @spiritOrbsReward

  getIsReplaceable:()->
    return @isReplaceable

  setRequiresStreak: (requiresStreak=true) ->
    @requiresStreak = requiresStreak

  getRequiresStreak: () ->
    return @requiresStreak or false

  setFriendlyMatchesCount: (friendlyMatchesCount=true) ->
    @friendlyMatchesCount = friendlyMatchesCount

  getFriendlyMatchesCount: () ->
    return @friendlyMatchesCount

  shouldResetProgress: (gameData,progressMade) ->
    # don't reset progress if this game didn't count based on being friendly
    if gameData.gameType == GameType.Friendly and !@friendlyMatchesCount
      return false

    # don't reset progress if game isn't over
    if gameData.status != GameStatus.over
      return false

    # If quest requires a streak, but no progress was made reset current progress
    if @requiresStreak && progressMade == 0
      return true

    return false

  # Used for seasonal and promo quests to determine if a quest is currently active
  # Override in subclasses
  isAvailableOn:(momentUtc)->
    return true



module.exports = Quest
