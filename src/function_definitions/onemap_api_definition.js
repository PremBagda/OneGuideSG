export const theme_api = {
    'name': 'retrieveTheme',
    'description': "Retrieve location point of interest from Onemap database based on theme. Don't use this for address querying. User can pass in the name of theme/information to query the content such as theater, gardens, community club, MRT exit, libraries, museum, polyclinic, hospitals, police station. In particular Dementia Go to point is referring to dfc_gtp. Medical clinic query should refer to moh_medical_dental. However if user is looking for CHAS clinic or mention about Community Health Assist Scheme, chasClinic parameter will be true",
    'parameters': {
        'type': 'object',
        'properties': {
            'queryName': {
                'type': 'array',
                'description': "The type of point of interest and theme data that user supplies. Can only strictly supply 1 parameter of queryName. Don't pass multiple queryName in the API call. Only select the list from the enum below.",
                "enum": [
                    "afterdeathfacilities",
                    "kindergartens",
                    "communityclubs",
                    "lanemarking",
                    "mrt_exits",
                    "cpe_pei_premises",
                    "axs_station",
                    "sla_asset_management",
                    "constituencyoffices",
                    "moh_cdmp_clinics",
                    "up_g_mp14_pa_gpr_an",
                    "up_g_mp14_pa_lu_an",
                    "hsgb_ippt",
                    "vehicularbridge",
                    "customs_tabacco_product",
                    "planning_area",
                    "infocommaccess",
                    "libraries",
                    "otherpanetworks",
                    "museum",
                    "region",
                    "pcn_access_points",
                    "sam_locations",
                    "secondhandcollecn",
                    "spf_dsecs",
                    "ssc_sports_facilities",
                    "wastedisposalsite",
                    "waterventure",
                    "ura_conservation_area",
                    "subzone",
                    "g_mp08_monu_bnd_pl_d1",
                    "up_g_mp14_cons_bldg_pl",
                    "up_g_mp14_cons_bndy_li",
                    "up_g_mp14_gpr_b_li",
                    "up_g_mp14_monu_bldg_pl",
                    "up_g_mp14_monu_pl",
                    "up_g_mp14_nature_li",
                    "ura_devt_register_map",
                    "heritageroadgreenbuffer",
                    "lamppost",
                    "gantry",
                    "guardrail",
                    "lta_road_enforcement_camera",
                    "schoolzone",
                    "silverzone",
                    "up_g_mp14_ag_rd_gr_li",
                    "sportsg_sport_facilities",
                    "g_mp14_buildhtctrl_bld_an",
                    "g_mp14_pkwb_nat_bndry_an",
                    "g_mp14_lha_pl",
                    "g_mp14_pkwb_pcn_an",
                    "g_mp14_pkwb_waterbody_an",
                    "g_mp14_ud_guide_dt_pl",
                    "nparks_bbq_pit",
                    "plan_bdy_age_female_2017",
                    "plan_bdy_age_gender_2017",
                    "plan_bdy_age_male_2017",
                    "plan_bdy_dwelling_type_2017",
                    "subzone_age_female_2017",
                    "subzone_age_gender_2017",
                    "subzone_age_male_2017",
                    "subzone_dwelling_type_2017",
                    "g_mp08_buildhtctrlrelax_pl",
                    "g_mp08_buildhtctrl_sty_pl",
                    "sla_horizontal_control",
                    "sla_safeguard_point",
                    "sla_vertical_control",
                    "sla_vertical_control",
                    "customs_tradenet_service",
                    "ura_du_pd6",
                    "ura_sale_site_pl",
                    "up_g_mp19_land_use_pl",
                    "cadastral_airspace_lot",
                    "spf_rlc",
                    "tree_conservation_area",
                    "sla_survey_district",
                    "sla_survey_district",
                    "subzone_age_female_2003",
                    "trafficsign",
                    "hdb_car_park_information",
                    "singaporemap_line",
                    "singaporemap_polygon",
                    "pub_waterlevelsensors",
                    "sea_games_special_event_area",
                    "subzone_age_female_2004",
                    "ndp_2015_special_event_area",
                    "ge2015_rally_site",
                    "plan_bdy_age_female_2000",
                    "plan_bdy_age_female_2002",
                    "nr_np_2018",
                    "subzone_age_female_2005",
                    "subzone_age_female_2006",
                    "subzone_age_female_2007",
                    "as_shangrila_core",
                    "subzone_age_female_2002",
                    "subzone_age_female_2000",
                    "ed_bdy_2009",
                    "eld2015",
                    "tb_msis_gaz_ed",
                    "as_istana_core",
                    "as_istana_buffer",
                    "as_shangrila_buffer",
                    "stables",
                    "singapore_cmhabitats_20102011",
                    "up_g_mp14_bldg_pl",
                    "areas_hap",
                    "hawkercentre",
                    "solarpv_zones",
                    "strengtheningfam",
                    "communityclubpassionwave",
                    "cm_habitat_20102011",
                    "pcg_offshore_islands",
                    "ndp_22_sea",
                    "ndp_22_sz",
                    "customs_motor_vehicle",
                    "jtc_luse_bp_bpw",
                    "civildefencepublicshelters",
                    "ura_dc_sector_map",
                    "hotels",
                    "healthiercaterers",
                    "kerbline",
                    "nparks_facilities",
                    "mp03_cons_an",
                    "sportsg_dus_sport_facilities",
                    "sportsg_sip_facilities",
                    "comm_use_sites",
                    "sla_lamp_post",
                    "sla_managing_agent",
                    "sla_mastertenants_subletting",
                    "cm_habitat_2018",
                    "hdb_active_blk_p",
                    "arrowmarking",
                    "customs_petroleum_product",
                    "heritagetrees",
                    "theatre",
                    "ura_parking_lot",
                    "residentscommittee",
                    "restricted_areaspoly",
                    "drone_no_fly",
                    "nparks_tracks",
                    "scdfhq",
                    "spf_dtrls",
                    "spf_establishments",
                    "spf_fsc",
                    "spf_pslc",
                    "tourism",
                    "wdaservicepoints",
                    "cib_gardens",
                    "cyclingpath",
                    "danger_areas",
                    "nparks_lamppost",
                    "park_connector_loop",
                    "boundary_5km",
                    "ema_planbdy_dwelling_2009",
                    "ura_parking_capacity_pt",
                    "hdbroadsunderconstruction",
                    "registered_pharmacy",
                    "voluntarywelfareorgs",
                    "trafficsignal",
                    "sla_dwelling_information_pub",
                    "activecemeteries",
                    "childcare",
                    "denguecase_central_area",
                    "denguecase_northeast_area",
                    "denguecase_southeast_area",
                    "denguecase_southwest_area",
                    "parkingstandardszone",
                    "eating_establishments",
                    "remittance",
                    "nparks_building",
                    "nparks_parks",
                    "ura_du_pd6_pt",
                    "reusechannels",
                    "ura_project_public_pl",
                    "sla_cadastral_map_index",
                    "quitcentres",
                    "nparks_uc_parks",
                    "watersupplyconstruction",
                    "hdbcyclingunderconstruction",
                    "moh_medical_dental",
                    "sewerageconstruction",
                    "nparks_uc_pc",
                    "cadastral_land_lot",
                    "community_programmes",
                    "employment_programmes",
                    "sped_schools",
                    "track_record_ils_feb18",
                    "paheadquarters",
                    "studentcare",
                    "exhibitioncentres",
                    "greenbuilding",
                    "historicsites",
                    "dengue_cluster",
                    "ewaste",
                    "firestation",
                    "nparks_play_fitness_eq",
                    "market_food_centre",
                    "customs_zero_gst_goods",
                    "ltarailprj_uc_unclass",
                    "retainingwall",
                    "taxistop",
                    "nparks_activity_area",
                    "nparks_carpark_lots",
                    "dfc_gtp",
                    "ura_site_w_conserved_bldg_pl",
                    "denguecase_northwest_area",
                    "firepost",
                    "streetsandplaces",
                    "wastetreatment",
                    "aed_locations",
                    "ssot_hawkercentres,supermarkets",
                    "axs_express_topup",
                    "tra_poly",
                    "zika_cluster",
                    "abcwatersconstruction",
                    "hsgb_safra",
                    "skyrise_greenery",
                    "state_reserve",
                    "mp03_gpr_bnd_li",
                    "mp03_lrt_stn_li",
                    "sea_games_special_zone",
                    "prohibited_areas",
                    "spf_msc",
                    "dsa",
                    "maxwell_fnb_map",
                    "underconstruction_facilities",
                    "spf_establishments_2018",
                    "mp03_natl_park_an",
                    "auditoriums",
                    "preschools_location",
                    "commmediationctr",
                    "hsgb_fcc",
                    "liquor_control_zones",
                    "liquor_control_zone",
                    "performingcentres",
                    "breedinghabitat_central_area",
                    "cashfortrash",
                    "cervicalscreen",
                    "cetcentres",
                    "breedinghabitat_northeast_area",
                    "breedinghabitat_northwest_area",
                    "breedinghabitat_southeast_area",
                    "breedinghabitat_southwest_area",
                    "breastscreen",
                    "ndp_23_sea",
                    "ndp_23_sz",
                    "silverinfocomm",
                    "sso",
                    "wireless_hotspots",
                    "cdcouncils",
                    "mp03_cons_bnd_li",
                    "jtc_building",
                    "jtc_estate_name",
                    "jtc_kerbline",
                    "jtc_tol",
                    "pub_cctv_public",
                    "hdbnrpunderconstruction",
                    "hdbbuildingunderconstruction",
                    "moh_nursinghomes",
                    "moh_clinical_xraylab",
                    "drainageconstruction",
                    "bca_estate_upg_prog_osp",
                    "hdbluppropunderconstruction",
                    "cleansing_outsourced",
                    "disability",
                    "neaoffices",
                    "abcwaterscompleted",
                    "bombshelters",
                    "npc_boundary",
                    "monuments",
                    "nationalparks",
                    "nr_gaz_2005",
                    "mha_uav_2015",
                    "bfabuildings",
                    "nsz",
                    "testingops",
                    "moneychanger",
                    "funeralparlours",
                    "eldercare",
                    "hdb_branches",
                    "healthierdining",
                    "family",
                    "ndp_2015_special_event_zone"
                ]
            },
            location: {
                type: 'string',
                description: 'Name of the location',
              },
            'lat': {
                'type': 'number',
                'description': 'Automatically populated latitude of the specified location. Be precise and provide at least 6 decimal places.'
            },
            'long': {
                'type': 'number',
                'description': 'Automatically populated longitude of the specified location. Be precise and provide at least 6 decimal places.'
            },
            'chasClinic': {
                'type': 'boolean',
                'description': 'If the query asked for CHAS card holder, set this to true to filter CHAS clinics only.'
            }
        },
        'required': ['queryName', 'location', 'lat', 'long', 'chasClinic']
    }
};


export const grant_api = {
    'name': 'grantAPI',
    'description': "Grant eligibility for seniors",
    'parameters': {
        'type': 'object',
        'properties': {
            'age': {
                'type': 'number',
                'description': "the age of the candidate",
            },
            'citizenship': {
                type: 'string',
                description: 'Citizenship of the candidate',
              },
            'residence': {
                'type': 'string',
                'description': 'Type of residence of the candidate'
            },
        },
        'required': ['age', 'citizenship', 'residence']
    }
};