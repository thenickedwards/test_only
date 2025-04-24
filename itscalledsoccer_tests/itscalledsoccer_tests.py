from itscalledsoccer.client import AmericanSoccerAnalysis

asa_client = AmericanSoccerAnalysis()

# Get all players named "Andre"
# asa_players = asa_client.get_players(names="Andre")
# print(asa_players)

# Get teams from a league
# teams = asa_client.get_teams(leagues="mls") 
# print(teams)

# Get all games from a season
# get_games(leagues=None, game_ids=None, team_ids=None, team_names=None, seasons=None, stages=None)
# Sounders id = jYQJ19EqGR
# matches = asa_client.get_games(leagues="mls", team_ids="jYQJ19EqGR")
# print(matches)

# matches2 = asa_client.get_games(leagues="mls", team_ids="jYQJ19EqGR", seasons="2019")
# print(matches2)

# MLS Cup 2019
# matches3 = asa_client.get_games(leagues="mls", game_ids="9YqdnBakMv")
# print(matches3)

# get_stadia
# mls_stadia = asa_client.get_stadia(leagues="mls")
# print(mls_stadia)
