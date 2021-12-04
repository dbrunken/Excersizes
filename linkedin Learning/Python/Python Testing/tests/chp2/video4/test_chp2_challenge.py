from scripts.chp2.video4.mapmaker_challenge import Point
import pytest


def test_make_one_point():
    p1 = Point("Dakar", 14.7167, 17.4677)
    # p2 = Point("Tokyo", 35.6528, 139.8394)
    # p3 = Point("Portland", 45.5230, -122.6764)
    assert p1.get_lat_long() == (14.7167, 17.4677)


def test_invalid_point_generation():
    with pytest.raises(ValueError) as exp:
        Point("Senegal", 99.6937, -189.44406)
    assert str(exp.value) == "Invalid latitude, longitude combination."

    with pytest.raises(ValueError) as exp:
        Point(8, 45.5230, -122.6764)
    assert str(exp.value) == 'Invalid city string.'
