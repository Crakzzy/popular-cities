const popularCities = {
    Bratislava: {
        lat: 48.148598,
        lon: 17.107748
    },
    Budapest: {
        lat: 47.497913,
        lon: 19.040236
    },
    Prague: {
        lat: 50.075538,
        lon: 14.437800
    },
    Vienna: {
        lat: 48.208176,
        lon: 16.373819
    },
    Warsaw: {
        lat: 52.229676,
        lon: 21.012229
    },
    Zagreb: {
        lat: 45.815011,
        lon: 15.981919
    },
    Berlin: {
        lat: 52.520008,
        lon: 13.404954
    },
    Paris: {
        lat: 48.856613,
        lon: 2.352222
    },
    London: {
        lat: 51.507351,
        lon: -0.127758
    },
    Madrid: {
        lat: 40.416775,
        lon: -3.703790
    },
    Rome: {
        lat: 41.902783,
        lon: 12.496366
    },
    Amsterdam: {
        lat: 52.367573,
        lon: 4.904138
    },
    Brussels: {
        lat: 50.850346,
        lon: 4.351721
    },
    Lisbon: {
        lat: 38.722252,
        lon: -9.139337
    },
    Copenhagen: {
        lat: 55.676097,
        lon: 12.568337
    },
    Oslo: {
        lat: 59.913869,
        lon: 10.752245
    },
    Stockholm: {
        lat: 59.329323,
        lon: 18.068581
    },
    Helsinki: {
        lat: 60.169856,
        lon: 24.938379
    },
    Moscow: {
        lat: 55.755826,
        lon: 37.617300
    },
    Istanbul: {
        lat: 41.008238,
        lon: 28.978359
    },
    Athens: {
        lat: 37.983810,
        lon: 23.727539
    },
    Bucharest: {
        lat: 44.426765,
        lon: 26.102537
    },
    Sofia: {
        lat: 42.697708,
        lon: 23.321868
    },
    Belgrade: {
        lat: 44.786568,
        lon: 20.448922
    },
    Kiev: {
        lat: 50.450100,
        lon: 30.523399
    },
    Minsk: {
        lat: 53.904541,
        lon: 27.561523
    },
    Vilnius: {
        lat: 54.687157,
        lon: 25.279652
    },
    Riga: {
        lat: 56.949649,
        lon: 24.105186
    },
    Tallinn: {
        lat: 59.437000,
        lon: 24.753574
    },
    Dublin: {
        lat: 53.349805,
        lon: -6.260310
    },
    Reykjavik: {
        lat: 64.126520,
        lon: -21.817440
    },
    Bern: {
        lat: 46.947975,
        lon: 7.447447
    },
    Luxembourg: {
        lat: 49.611621,
        lon: 6.131935
    },
    Monaco: {
        lat: 43.738418,
        lon: 7.424616
    },
    Vatican: {
        lat: 41.902916,
        lon: 12.453389
    },
    NewYork: {
        lat: 40.712776,
        lon: -74.005974
    },
    LosAngeles: {
        lat: 34.052235,
        lon: -118.243683
    },
    Chicago: {
        lat: 41.878113,
        lon: -87.629799
    },
    Houston: {
        lat: 29.760427,
        lon: -95.369804
    },
    Phoenix: {
        lat: 33.448376,
        lon: -112.074036
    },
    Philadelphia: {
        lat: 39.952583,
        lon: -75.165222
    },
    SanAntonio: {
        lat: 29.424349,
        lon: -98.491142
    },
    SanDiego: {
        lat: 32.715736,
        lon: -117.161087
    },
    Dallas: {
        lat: 32.776272,
        lon: -96.796856
    },
    SanJose: {
        lat: 37.338207,
        lon: -121.886330
    },
    Austin: {
        lat: 30.267153,
        lon: -97.743057
    },
    Jacksonville: {
        lat: 30.332184,
        lon: -81.655647
    },
    Indianapolis: {
        lat: 39.768403,
        lon: -86.158068
    },
    Columbus: {
        lat: 39.961178,
        lon: -82.998794
    },
    FortWorth: {
        lat: 32.755488,
        lon: -97.330766
    },
    Charlotte: {
        lat: 35.227085,
        lon: -80.843124
    },
    Seattle: {
        lat: 47.606209,
        lon: -122.332069
    },
    Denver: {
        lat: 39.739235,
        lon: -104.990250
    },
    Washington: {
        lat: 38.895111,
        lon: -77.036369
    },
    Boston: {
        lat: 42.360081,
        lon: -71.058884
    },
    Detroit: {
        lat: 42.331429,
        lon: -83.045753
    },
    Nashville: {
        lat: 36.162663,
        lon: -86.781601
    },
    Memphis: {
        lat: 35.149532,
        lon: -90.048981
    },
    Atlanta: {
        lat: 33.748997,
        lon: -84.387985
    },
    Miami: {
        lat: 25.761681,
        lon: -80.191788
    },
    Tampa: {
        lat: 27.950575,
        lon: -82.457178
    },
    Honolulu: {
        lat: 21.306944,
        lon: -157.858337
    },
    Sydney: {
        lat: -33.868820,
        lon: 151.209290
    },
    Melbourne: {
        lat: -37.813628,
        lon: 144.963058
    },
    Brisbane: {
        lat: -27.469770,
        lon: 153.025131
    },
    Perth: {
        lat: -31.950527,
        lon: 115.860457
    },
    Adelaide: {
        lat: -34.928180,
        lon: 138.599930
    },
    Auckland: {
        lat: -36.848461,
        lon: 174.763336
    },
    Wellington: {
        lat: -41.286461,
        lon: 174.776230
    },
    Christchurch: {
        lat: -43.532054,
        lon: 172.636225
    },
    Hamilton: {
        lat: -37.787001,
        lon: 175.279251
    },
    Dunedin: {
        lat: -45.878761,
        lon: 170.502797
    },
    Spa: {
        lat: 50.490547,
        lon: 5.863956
    },
    Tokio: {
        lat: 35.689487,
        lon: 139.691711
    },
    Osaka: {
        lat: 34.693737,
        lon: 135.502167
    },
    Kyoto: {
        lat: 35.011636,
        lon: 135.768029
    },
    Seoul: {
        lat: 37.566535,
        lon: 126.977969
    },
    Beijing: {
        lat: 39.904202,
        lon: 116.407396
    },
    Shanghai: {
        lat: 31.230391,
        lon: 121.473701
    },
    HongKong: {
        lat: 22.396428,
        lon: 114.109497
    },
    Taipei: {
        lat: 25.032969,
        lon: 121.565418
    },
    Bangkok: {
        lat: 13.756331,
        lon: 100.501762
    },
    Singapore: {
        lat: 1.352083,
        lon: 103.819839
    },
    KualaLumpur: {
        lat: 3.139003,
        lon: 101.686852
    },
    Jakarta: {
        lat: -6.208763,
        lon: 106.845599
    },
    Manila: {
        lat: 14.599512,
        lon: 120.984219
    },
    Hanoi: {
        lat: 21.028511,
        lon: 105.804817
    },
    Pyongyang: {
        lat: 39.039219,
        lon: 125.762524
    },
}

export default popularCities;